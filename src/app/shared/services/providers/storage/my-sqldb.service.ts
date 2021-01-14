import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { User, UserConfig, UserConfigAction } from 'src/app/models/user';


@Injectable({
    providedIn: 'root'
})
export class MySqlStorage {
    private storage: SQLiteObject;
    private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
    /**
     *
     */
    constructor(
        private sqlite: SQLite,
        private platform: Platform
    ) {
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'almamater.db',
                location: 'default'
            })?.then((db: SQLiteObject) => {
                    this.storage = db;
                    this.createTables();
                    this.isDbReady.next(true);
                }).catch(e => { console.log(e); });
        });
    }

    dbState() {
        return this.isDbReady.asObservable();
    }

    createTables() {
        // create user tables
        this.storage.executeSql(`CREATE TABLE IF NOT EXISTS config(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    action TEXT NOT NULL UNIQUE,
                    response TEXT NOT NULL,
                    reason TEXT,
                    userId INTEGER
                )`, [])
            .then(() => console.log('config Tbl created!'))
            .catch(e => console.log(JSON.stringify(e)));
    }


    saveConfig(cfg: UserConfig) {
        this.getConfig(cfg?.action).then(savedCfg => {
            if (savedCfg?.id) {
                // update
                this.updateConfig(cfg);
            } else {
                // save new config
                this.storage.executeSql('INSERT INTO config (action, response, reason, userId) VALUES (?, ?, ?, ?)',
                    [cfg]).then(res => {
                        console.log('Config object saved');
                    }).catch(e => { console.log(JSON.stringify(e)); });
            }
        });
    }

    private updateConfig(cfg: UserConfig) {
        return this.storage.executeSql(`UPDATE config SET action = ?, response = ?, reason = ?, userId = ?,
        WHERE action = ${cfg?.action}`, [cfg])
            .then(data => {
                console.log('Sql updated data');
                console.log(JSON.stringify(data));
            });
    }

    async getConfig(action: string): Promise<UserConfig> {
        return this.storage.executeSql('SELECT * FROM config WHERE key = ?', [action]).then(res => {
            return {
                id: res.rows?.item(0)?.id,
                action: res?.rows?.item(0)?.action,
                response: res?.rows?.item(0)?.response,
                reason: res?.rows?.item(0)?.reason,
                userId: res?.rows?.item(0)?.userId
            };
        });
    }

    deleteConfig(action: string) {
        return this.storage.executeSql('DELETE FROM config WHERE action = ?', [action])
            .then(_ => {
                console.log(action + ' is deleted from permanent storage');
            });
    }

    async saveUserPermanent(user: User) {
        await this.platform.ready();
        // set user to permanent storage
        const cfg: UserConfig = {
            id: null,
            action: UserConfigAction.SaveLoggedInUser,
            response: JSON.stringify(user), // user object
            reason: 'Logged in user details',
            userId: user?.id
        };
        this.saveConfig(cfg);
    }

    async getUserPermanent(): Promise<User> {
        await this.platform.ready();
        return this.getConfig(UserConfigAction.SaveLoggedInUser).then(cfg => {
            return JSON.parse(cfg?.response);
        });
    }


}
