import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
// this route is actually /user/profile not /profile
export const userRoutes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]