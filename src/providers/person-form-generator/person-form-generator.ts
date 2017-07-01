import { AddressFormGeneratorProvider } from './../address-form-generator/address-form-generator';
import { VehicleFormGeneratorProvider } from './../vehicle-form-generator/vehicle-form-generator';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGeneratorProvider } from "../form-generator/form-generator";
import { Person } from "../../models/Person";

@Injectable()
export class PersonFormGeneratorProvider extends FormGeneratorProvider<Person> {

  constructor(formBuilder: FormBuilder, vfg: VehicleFormGeneratorProvider, afg: AddressFormGeneratorProvider) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      complexMapper: {
        vehicles: vfg,
        address: afg
      }
    });
  }

}
