import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxRruleComponent } from './ngx-rrule.component';
import { StartComponent } from './components/start/start.component';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EndComponent } from './components/end/end.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { WeeklyComponent } from './components/repeat/weekly/weekly.component';
import { MonthlyComponent } from './components/repeat/monthly/monthly.component';
import { YearlyComponent } from './components/repeat/yearly/yearly.component';

@NgModule({
  declarations: [NgxRruleComponent, StartComponent, EndComponent, RepeatComponent, WeeklyComponent, MonthlyComponent, YearlyComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ],
  exports: [NgxRruleComponent]
})
export class NgxRruleModule { }
