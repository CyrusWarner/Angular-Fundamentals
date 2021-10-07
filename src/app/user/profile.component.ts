import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
// THIS IS AN EXAMPLE FOR CREATING A REACTIVE FORM
@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    // firstName and lastName fields are provided with initial values of the user
    let firstName = new FormControl(this.authService.currentUser.firstName)
    let lastName = new FormControl(this.authService.currentUser.lastName)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    })
  }

  saveProfile(formValues){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])

  }

  cancel(){
    this.router.navigate(['events'])
  }
}