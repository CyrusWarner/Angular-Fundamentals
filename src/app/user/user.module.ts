import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";

// Components
import { ProfileComponent } from "./profile.component";

// Routes
import { userRoutes } from "./user.routes";
// difference between the app module and feauture module is instead of browser module we put common module.
// also use forChild instead of for root on RouterModule
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ],
})

export class UserModule {}