import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private _toast: ToastController) { }

  async toast(msg: string, duration?: number) {
    if (!duration) { duration = 2000; }
    const toast = await this._toast.create({
      message: msg,
      duration: 4000,
      cssClass: 'my-custom-class'
    });
    toast.present();
  }

  async toastOptions(conf: any) {
    // {
    //   message: 'Click to Close',
    //   showCloseButton: true,
    //   position: 'top',
    //   closeButtonText: 'Done'
    // }
    const toast = await this._toast.create(conf);
    toast.present();
  }
}
