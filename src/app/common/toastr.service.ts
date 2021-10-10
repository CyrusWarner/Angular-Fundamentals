import {InjectionToken} from '@angular/core'
// Creating a provider for an external service toastr api
// use the Injection token to create a token for Angular to recognize as a dependency or provider



export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
  success (msg:string, title?: string): void;
  Info (msg:string, title?: string): void;
  warning (msg:string, title?: string): void;
  error (msg:string, title?: string): void;
}
