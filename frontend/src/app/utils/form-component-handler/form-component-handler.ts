import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';


export class FormComponentHandler<T> {
  constructor(
      private formObject: T,
      private formGroup: FormGroup,
      private componentPrefix?: string,
  ) {
    this.addObjectControlsToFormGroup();
  }

  formControlNameForProperty(propertyName: keyof(T)): string {
    // this prefix has to be unique in the formGroup!!
    const prefix = this.componentPrefix == null ? FormComponentHandler.name : this.componentPrefix;
    return `${prefix}-${propertyName as string}`;
  }

  formControlForProperty(propertyName: keyof(T)): FormControl {
    const controlId = this.formControlNameForProperty(propertyName);
    return this.formGroup.controls[controlId] as FormControl;
  }

  valueForFormControl(controlId: keyof(T)): any | null {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const value = this.formControlForProperty(controlId).value;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value === '' ? null : value;
  }

  subscribeToPropertyControl(propertyName: keyof(T)): Observable<any> {
    return this.formControlForProperty(propertyName).valueChanges;
  }

  enableControl(propertyName: keyof(T)) {
    this.formControlForProperty(propertyName).enable();
  }

  disableControl(propertyName: keyof(T)) {
    this.formControlForProperty(propertyName).disable();
  }

  commitChangesToFormObject(): T {
    const updatedFormObject = { ...this.formObject };
    Object.entries(this.formObject).forEach(([key, oldValue]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const newValue = this.valueForFormControl(key as keyof(T));
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      updatedFormObject[key] = newValue === null ? oldValue : newValue;
    });
    return updatedFormObject;
  }

  addObjectControlsToFormGroup() {
    Object.entries(this.formObject).forEach(([key, value]) => {
      this.formGroup.addControl(this.formControlNameForProperty(key as keyof(T)), new FormControl(value, []));
    });
  }

  addValidators(keyValidatorDic: [keyof(T), ValidatorFn[]][]) {
    keyValidatorDic.forEach(([key, validators]) => {
      this.formControlForProperty(key).setValidators(validators);
    });
  }

  addCustomAbstractControl(controlName: string, abstractControl: AbstractControl) {
    this.formGroup.addControl(controlName, abstractControl);
  }

  getCustomAbstractontrol(controlName: string): AbstractControl {
    return this.formGroup.controls[controlName];
  }
}
