import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasIntakeRoutingModule } from './ideas-intake-routing.module';
import { IdeasIntakeComponent } from './ideas-intake.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [IdeasIntakeComponent],
  imports: [
    CommonModule,
    IdeasIntakeRoutingModule,
    NzDropDownModule,
    HttpClientModule, 
    AngularEditorModule,
  ]
})
export class IdeasIntakeModule { }
