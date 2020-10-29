import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { WidgetsModule } from './widgets/widgets.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/services/model-service/user.service';
import { IonicStorageModule } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { httpInterceptorProviders } from './shared/services/my-interceptors';
import { BrowserHistoryService } from './shared/services/providers/navigation/browser-history.service';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '_Fdb',
      driverOrder: [
        'sqlite', 'indexeddb', 'websql',
        'localstorage']
    }),
    NgxIonicImageViewerModule,
    WidgetsModule,
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Storage,
    UserService,
    BrowserHistoryService,
    httpInterceptorProviders,
    PhotoLibrary, 
    File
  ],
  exports: [
    CommonModule,
    FormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
