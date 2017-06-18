import { PersonFormGeneratorProvider } from './../../providers/person-form-generator/person-form-generator';
import { Person } from './../../models/Person';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  person: Person = {
    firstName: 'Joe',
    lastName: 'Bloggs',
    height: 180,
    age: 30
  }

  form: FormGroup

  constructor(public navCtrl: NavController, pfg: PersonFormGeneratorProvider) {
    this.form = pfg.create(this.person);
  }

}
