import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { MainComponent } from './main/main.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { LoginComponent } from './login/login.component';
import { authenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"faculty", component:FacultyComponent,canActivate:[authenticationGuard]},
  {path:"faculty/add", component:AddFacultyComponent,canActivate:[authenticationGuard]},
  {path:"faculty/:id", component:DetailFacultyComponent,canActivate:[authenticationGuard]},
  {path:"login", component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
