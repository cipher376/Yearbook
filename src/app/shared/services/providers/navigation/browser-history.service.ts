import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { filter, last } from 'rxjs/operators';

export interface BrowserHistoryInterface {
  pageName: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BrowserHistoryService {
  private history = [];
  private size = 10;

  private historySource = new Subject<any[]>();
  historySource$ = this.historySource.asObservable();

  private previousPageSource = new Subject<string>();
  previousPageSource$ = this.previousPageSource.asObservable();


  constructor(
    private router: Router
  ) { }


  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        this.history = [...this.history, urlAfterRedirects];
        const tmp = this.history;
        // keep browsing history minimal
        try {
          this.history = this.history.slice(this.history.length - this.size);
        } catch (e) {
          this.history = tmp;
        }
        // console.log(this.history);

        // announce previous page name
        const lastUrls = (this.history[this.history.length - 2] || '/link/home').split('/');
        this.announcePreviousPage(lastUrls[lastUrls?.length - 1]);
      });
  }

  announceHistory(history: string[]) {
    this.historySource.next(history);
  }

  announcePreviousPage(pageName: string) {
    this.previousPageSource.next(pageName);
  }

  public getHistory(): string[] {
    return this.history;
  }

  get currentUrl() {
    return '/' + this.history[this.history.length];
  }


  public getPreviousUrl() {
    this.history.pop();
    const url = this.history[this.history.length - 1] || 'link/home';
    return '/' + url;
  }

}
