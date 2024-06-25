import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasIntakeRoutingModule } from './ideas-intake-routing.module';
import { IdeasIntakeComponent } from './ideas-intake.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SuccessComponent } from '../../components/modal/success/success.component';
import { ErrorComponent } from '../../components/modal/error/error.component';

@NgModule({
  declarations: [IdeasIntakeComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    IdeasIntakeRoutingModule,
    NzDropDownModule,
    HttpClientModule, 
    AngularEditorModule,
  ]
})
export class IdeasIntakeModule { }
