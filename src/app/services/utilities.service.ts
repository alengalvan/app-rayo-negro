import { Injectable } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController) { }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public async alert(title: string, message: string, nombreBoton?: string) {
    this.alertCtrl.create({
      cssClass: "alertCustom",
      mode: "ios",
      header: title,
      message: message,
      buttons: [{
        text: nombreBoton ? nombreBoton : "Aceptar"
      }]
    }).then(alert => {
      alert.present();
    });
  }

}
