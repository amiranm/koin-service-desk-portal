import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeasIntakeComponent } from './ideas-intake.component';

const routes: Routes = [
  { path: 'ideas-intake', component: IdeasIntakeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasIntakeRoutingModule { }
