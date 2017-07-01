import { PersonFormGeneratorProvider } from './../../providers/person-form-generator/person-form-generator';
import { Person } from './../../models/Person';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  person: Person = {
    firstName: 'Joe',
    lastName: 'Bloggs',
    height: 180,
    age: 30,
    address: {
      line1: '33 Somewhere',
      line2: 'Over the Rainbow',
      city: 'Emarald City'
    },
    vehicles: [{
      regNumber: 'abc123',
      make: 'ford',
      color: 'red'
    }, {
      regNumber: 'def456',
      make: 'honda',
      color: 'blue'
    }]
  }

  form: FormGroup

  getVehicles() {
    return (<FormArray>this.form.get('vehicles')).controls;
  }

  isFormValid() {
    return this.form.valid;
  }

  constructor(public navCtrl: NavController, pfg: PersonFormGeneratorProvider) {
    this.form = pfg.create(this.person);

  }

}
