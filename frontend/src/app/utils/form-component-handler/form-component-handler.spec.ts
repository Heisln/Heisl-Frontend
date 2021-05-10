/* eslint-disable jasmine/new-line-before-expect */
import { async } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { FormComponentHandler } from './form-component-handler';

interface TestType {
  param1: string;
  param2: number;
  nullParam: string;
}

describe('Form-component-handler', () => {
  let formGroup: FormGroup;
  let handler: FormComponentHandler<TestType>;
  const testObj = { param1: 'string', param2: 1, nullParam: null } as TestType;

  beforeEach(async(() => {
    formGroup = new FormGroup({});
    handler = new FormComponentHandler<TestType>(
      testObj,
      formGroup
    );
  }));

  it('should create control for eachProperty', () => {
    const cntrlCount = Object.keys(formGroup.controls).length;
    expect(cntrlCount).toBe(3);
  });

  it('should set class name as prefix for each control if no prefix was set', () => {
    const keys = Object.keys(formGroup.controls);
    keys.forEach(key => {
      expect(key).toContain(FormComponentHandler.name);
    });
  });

  it('should set custom prefix for controlName', () => {
    const prefix = 'awesomePrefix';
    const prefixedHandler = new FormComponentHandler<TestType>(
      testObj,
      formGroup,
      prefix,
    );
    const controlName = prefixedHandler.formControlNameForProperty('param1');
    expect(controlName).toContain(prefix);
  });

  it('should set class name as prefix for controlName', () => {
    const controlName = handler.formControlNameForProperty('param1');
    expect(controlName).toContain(FormComponentHandler.name);
  });

  it('should return FormComponent for property', () => {
    const control = handler.formControlForProperty('param1');
    expect(control).toBeInstanceOf(FormControl);
  });

  // it('should prefix all controls with custom Prefix', () => {
  //   const prefix = 'awesomePrefix';
  //   const prefixedHandler = new FormComponentHandler<TestType>(
  //     testObj,
  //     formGroup,
  //     prefix,
  //   );
  //   Object.keys(prefixedHandler.handlerFormGroup.controls).forEach(key => {
  //     expect(key).toContain(prefix);
  //   });
  // });

  it('should add customAbstractControl on addCustomAbstractControl', () => {
    const abstractControlName = 'abstractControlName';
    handler.addCustomAbstractControl(abstractControlName, new FormGroup({}));

    const cntrlCount = Object.keys(formGroup.controls).length;
    expect(cntrlCount).toBe(4);
    expect(handler.getCustomAbstractontrol(abstractControlName)).toBeInstanceOf(FormGroup);
  });
});
