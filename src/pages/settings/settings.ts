import { Component } from '@angular/core';
import { AlertController, MenuController } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {

    constructor(private alertCtrl: AlertController,
                private menuCtrl: MenuController){
    }
    
    onToggleLights() {
        let alert = this.alertCtrl.create({
            title: 'Etes-vous certains de vouloir continuer ?',
            subTitle: 'Cette action allumera ou éteindra toutes les lumières de la maison.',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel'
                },
                {
                    text: 'Confirmer',
                    handler: () => console.log('confirmé') //cree fonction appel API pour etiendre lumieres
                }
            ]
        });
        alert.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}
