import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { InsertComponent } from './components/insert/insert.component';
import { DeleteComponent } from './components/delete/delete.component';
import { SelectComponent } from './components/select/select.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'all',
      component:AllDetailsComponent
    },
    {
      path:'insert',
      component:InsertComponent
    },
    {
      path:'delete/:code',
      component:DeleteComponent
    },
    {
      path:'select/:code',
      component:SelectComponent
    },
    {
      path:'update/:code',
      component:UpdateComponent
    },
    {
      path:'**',
      component:PageNotFoundComponent
    },

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
