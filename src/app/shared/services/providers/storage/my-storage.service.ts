import { Storage } from '@ionic/storage'; // MOBILE BUILD
import { Injectable } from '@angular/core';
// import { LocalStorageService, SessionStorageService } from 'ngx-webstorage'; // WEB BUILD



export interface StorageInterface {

  set(key: string, value);
  setObject<T = object>(key: string, object: T);
  get(key: string);
  getObject<T = object>(key: string);
  remove(key: string);
  clear();


}

@Injectable({
  providedIn: 'root'
})
export class MyStorage implements StorageInterface {

  constructor(private storage: Storage) {
  }

  /**************************ENABLE FOR WEB*********************** */
  // set(key: string, value) {
  //   return this.storage.store(key, value);
  // }

  // setObject(key: string, object: Object) {
  //   return this.storage.store(key, JSON.stringify(object));
  // }

  // get(key: string) {
  //   return this.storage.retrieve(key);
  // }

  // getObject(key: string) {
  //   const result = this.storage.retrieve(key);
  //   if (result) {
  //     return JSON.parse(result);
  //   }
  //   return null;
  // }

  // remove(key: string) {
  //   this.storage.clear(key);
  // }

  // clear() {
  //   this.storage.clear();
  // }








  /****************************ENABLE FOR MOBILE BUILD*********************/
  async set(key: string, value): Promise<any> {
    return await this.storage.set(key, value).then(result => {
      // console.log('set string in storage: ' + result);
      return true;
    }).catch((reason) => {
      console.log(reason);
      return false;
    });
  }

  async setObject<T = object>(key: string, object: T) {
    return await this.storage.set(key, JSON.stringify(object))
      .then(result => {
        // console.log('set Object in storage: ' + result);
        return true;
      }).catch((reason) => {
        console.log(reason);
        return false;
      });
  }

  async get(key: string): Promise<any> {
    return await this.storage.get(key).then(result => {
      // console.log('storageGET: ' + key + ': ' + result);
      if (result != null) { return result; }
      return null;
    }).catch((reason) => {
      console.log(reason);
      return null;
    });
  }

  async getObject<T = object>(key: string): Promise<T> {
    return await this.storage.get(key).then(result => {
      if (result != null) { return JSON.parse(result); }
      return null;
    }).catch((reason) => {
      console.log(reason);
      return null;
    });
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

  async clear() {
    await this.storage.clear();
  }


}
