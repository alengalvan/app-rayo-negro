import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-alta-establecimiento',
  templateUrl: './alta-establecimiento.page.html',
  styleUrls: ['./alta-establecimiento.page.scss'],
})
export class AltaEstablecimientoPage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  public sliderOne: any;
  public listaMastercardRadio: any[] = [
    { nombre: 'Sticker', valor: 'sticker' },
    { nombre: 'Reloj (open / close)', valor: 'reloj' },
    { nombre: 'Acrilico', valor: 'acrilico' }
  ]
  public datosGenerales: FormGroup = this.formBuilder.group({
    nombreEstablecimiento: ['', Validators.required],
    razonSocial: ['', Validators.required],
    tipoComercio: ['', Validators.required],
    subTipoComercio: ['', Validators.required],
    nombreOutlet: ['', Validators.required],
  });

  public datosUbicacion: FormGroup = this.formBuilder.group({
    numeroEstablecimiento: ['', Validators.required]
  });

  public seleccioneMaterial: FormGroup = this.formBuilder.group({
    comunicacion: ['', Validators.required],
    localizacionItem: ['', Validators.required]
  });

  public compartieronRazonSocial: boolean = false;
  public estasEnOutlet: boolean = false;
  public pasoFormulario: number = 1;

  get nombreEstablecimiento() {
    return this.datosGenerales.get("nombreEstablecimiento");
  }
  get razonSocial() {
    return this.datosGenerales.get("razonSocial");
  }
  get tipoComercio() {
    return this.datosGenerales.get("tipoComercio");
  }
  get subTipoComercio() {
    return this.datosGenerales.get("subTipoComercio");
  }
  get nombreOutlet() {
    return this.datosGenerales.get("nombreOutlet");
  }


  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995
        },
        {
          id: 925
        },
        {
          id: 940
        },
        {
          id: 943
        },
        {
          id: 944
        }
      ]
    };
  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  ngOnInit() {

  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public validacionDatosGenerales() {
    console.log(this.datosGenerales.value)
    console.log(this.pasoFormulario)
    this.pasoFormulario = this.pasoFormulario + 1;
  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public cerrarFormularios() {
    this.navCtrl.navigateRoot("home");
  }

}
