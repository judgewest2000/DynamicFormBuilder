import { Address } from './../../models/Address';
import { VehicleFormGeneratorProvider } from './../vehicle-form-generator/vehicle-form-generator';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGeneratorProvider } from "../form-generator/form-generator";
import { Person } from "../../models/Person";

@Injectable()
export class AddressFormGeneratorProvider extends FormGeneratorProvider<Address> {

  constructor(formBuilder: FormBuilder, vfg: VehicleFormGeneratorProvider) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
        city: ['', Validators.required]
      }),
    });
  }

}
