import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../../models/Appareil';
import { AppareilsService } from '../../../services/appareils.service';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {

  index: number;
  appareil: Appareil;

/* // sans modal (avec NavController)   
  constructor(public navParams: NavParams) {
  } */

  // avec modal
  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private appareilsService: AppareilsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  //avec modal
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
    this.dismissModal();
  }

  onDeleteHours() {
    this.appareil.startTime = '';
    this.appareil.endTime = '';
    this.dismissModal();
  }
}
