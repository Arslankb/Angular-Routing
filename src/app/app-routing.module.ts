import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    component: HomeComponent,
    path: 'home'
  },

  {
    component: AboutComponent,
    path: 'about'
  },

  {
    component:CoursesComponent,
    path:'courses'
  },

  {
    path: '**', component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
