import { Component, OnInit } from '@angular/core';
//import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-lesinster',
  templateUrl: './lesinster.page.html',
  styleUrls: ['./lesinster.page.scss'],
})
export class LesinsterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCountiesPage(){
 // this.NavCtrl.navigationForward('/lesinster-counties')
  }
}
