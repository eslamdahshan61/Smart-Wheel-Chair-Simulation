import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

const routes=[
  {
    path:'main',
    component: MainPageComponent, children: [
     
      {path :'dashboard' , component : DashboardComponent } ,
      {path :'regiser' , component : RegisterComponent} ,
      { path: '', redirectTo: 'main', pathMatch: "full" },
    ]
  },

  { path: '',   component : MainPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
