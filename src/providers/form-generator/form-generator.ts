import { Injectable } from '@angular/core';

import { FormBuilder } from "@angular/forms";

/*
  Generated class for the FormGeneratorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export abstract class FormGeneratorProvider<T> {

  constructor(private params: {
    formBuilder: FormBuilder,
    schema: () => { [key: string]: any[] }
  }) {
  }

  create(data: T) {
    debugger;
    const keysToAdd = Object.keys(data).filter(k => !Object.keys(this.params.schema()).some(pk => pk === k));

    const schema = this.params.schema();

    keysToAdd.forEach(k => schema[k] = []);

    const form = this.params.formBuilder.group(schema);

    form.setValue(data);

    return form;
  }

}
