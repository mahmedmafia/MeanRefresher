import { LogHistoryComponent } from './components/log-history/log-history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'',redirectTo:'/logs',pathMatch:'full'},

  {path:'form',component:FormComponent},
  {path:'logs',component:LogHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
