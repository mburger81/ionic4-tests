import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  login: any = { username: '', password: '' };



  constructor() { }

  ngOnInit() {

  }

}
