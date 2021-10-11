import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';
// providers registering the LocationValidator as a validator
// use the multi key as true to add it to list of services as a validator
@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
// We have to go to the root from the attribute validateLocation to access the onlineUrl formgroup controls.
// That is why we access with root and give the root a type of formgroup
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      // returning null to a validator tells the validator there is no problem
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
