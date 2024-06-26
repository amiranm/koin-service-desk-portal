import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasIntakeRoutingModule } from './ideas-intake-routing.module';
import { IdeasIntakeComponent } from './ideas-intake.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SuccessComponent } from '../../components/modal/success/success.component';
import { ErrorComponent } from '../../components/modal/error/error.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IdeasIntakeModule { }
