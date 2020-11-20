import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'estudios', component: EstudiosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
