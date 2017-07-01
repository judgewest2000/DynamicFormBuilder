import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Vehicle } from './../../models/Vehicle';
import { Injectable } from '@angular/core';
import { FormGeneratorProvider } from "../form-generator/form-generator";


/*
  Generated class for the VehicleFormGeneratorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class VehicleFormGeneratorProvider extends FormGeneratorProvider<Vehicle> {

  constructor(formBuilder: FormBuilder) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
        regNumber: ['', Validators.required],
        make: ['', Validators.required]
      })
    });
  }

}
