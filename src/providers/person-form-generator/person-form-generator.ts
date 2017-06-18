import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGeneratorProvider } from "../form-generator/form-generator";
import { Person } from "../../models/Person";

@Injectable()
export class PersonFormGeneratorProvider extends FormGeneratorProvider<Person> {

  constructor(formBuilder: FormBuilder) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
        firstName: ['', Validators.required],
        lastName: [Validators.required]
      })
    });
  }

}
