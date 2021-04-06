import { NgModule } from '@angular/core';
import { FormCheckboxComponentModule } from './form-checkbox/form-checkbox.component.module';
import { FormDateComponentModule } from './form-date/form-date.component.module';
import { FormNumberComponentModule } from './form-number/form-number.component.module';
import { FormSelectEnumComponentModule } from './form-select-enum/form-select-enum.component.module';
import { FormTextComponentModule } from './form-text/form-text.component.module';
import { FormToggleComponentModule } from './form-toggle/form-toggle.component.module';

@NgModule({
  exports: [
    FormToggleComponentModule,
    FormCheckboxComponentModule,
    FormNumberComponentModule,
    FormDateComponentModule,
    FormTextComponentModule,
    FormSelectEnumComponentModule,
  ],
})
export class FormComponentModule { }
