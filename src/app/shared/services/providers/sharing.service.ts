import { MySignals } from 'src/app/shared/services/my-signals';
import { EntityType } from './../../../models/shareable';
import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
import { ToasterService } from './widgets/toaster.service';



@Injectable({
    providedIn: 'root',
})
export class SocialSharingService {

    /**
     *
     */
    constructor(
        private platform: Platform,
        private socialSharing: SocialSharing,
        private toaster: ToasterService,
        private signal: MySignals
    ) {

    }

    share(
        packageName: string,
        appName: string,
        social: string,
        message: string,
        subject: string,
        image: string,
        url: string) {
        this.platform.ready().then(() => {
            if (social === 'facebook') {
                this.socialSharing
                    .canShareVia(
                        packageName,
                        message,
                        subject,
                        image,
                        url
                    )
                    .then(() => {
                        this.socialSharing
                            .shareViaFacebook(message, image, url).then(success => {
                                // increase share count for entity
                                this.signal.announceShared(true); // 
                            })
                            .catch(err => {
                                this.showSuccesToast(
                                    'There was a problem please try later'
                                );
                                this.signal.announceShared(false); // 
                            });
                    })
                    .catch(err => {
                        this.showFailToast(appName);
                    });
            } else if (social === 'whatsapp') {
                this.socialSharing
                    .canShareVia(
                        packageName,
                        message,
                        subject,
                        image,
                        url
                    )
                    .then(() => {
                        this.socialSharing
                            .shareViaWhatsApp(message, image, url).then(_ => {
                                this.signal.announceShared(true); // 
                            })
                            .catch(err => {
                                this.showSuccesToast(
                                    'There was a problem please try later'
                                );
                                this.signal.announceShared(false); // 
                            });
                    })
                    .catch(err => {
                        this.showFailToast(appName);
                    });
            } else if (social === 'instagram') {
                this.socialSharing
                    .canShareVia(
                        packageName,
                        message,
                        subject,
                        image,
                        url
                    )
                    .then(() => {
                        this.socialSharing
                            .shareViaInstagram(message, image).then(_ => {
                                this.signal.announceShared(true); // 
                            })
                            .catch(err => {
                                this.showSuccesToast(
                                    'There was a problem please try later'
                                );
                                this.signal.announceShared(false); // 
                            });
                    })
                    .catch(err => {
                        this.showFailToast(appName);
                    });
            } else if (social === 'twitter') {
                this.socialSharing
                    .canShareVia(
                        packageName,
                        message,
                        subject,
                        image,
                        url
                    )
                    .then(() => {
                        this.socialSharing
                            .shareViaTwitter(message, image, url).then(_ => {
                                this.signal.announceShared(true); // 

                            })
                            .catch(err => {
                                this.showSuccesToast(
                                    'There was a problem please try later'
                                );
                                this.signal.announceShared(false); // 

                            });
                    })
                    .catch(err => {
                        this.showFailToast(appName);
                    });
            } else {
                this.socialSharing
                    .share(message, subject, image, url).then(_ => {
                        this.signal.announceShared(true); // 

                    })
                    .catch(err => {
                        this.showSuccesToast('There was a problem please try later');
                        this.signal.announceShared(false); // 

                    });
            }
        });
    }

    async showSuccesToast(message: string) {
        this.toaster.toast(message, 5000);
    }

    async showFailToast(appName: string) {
        this.toaster.toast(`${appName} is not installed on your device`, 5000);
    }
}
