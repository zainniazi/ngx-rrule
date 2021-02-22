import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxRruleComponent } from "./ngx-rrule.component";
import { StartComponent } from "./components/start/start.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EndComponent } from "./components/end/end.component";
import { RepeatComponent } from "./components/repeat/repeat.component";
import { WeeklyComponent } from "./components/repeat/weekly/weekly.component";
import { MonthlyComponent } from "./components/repeat/monthly/monthly.component";
import { YearlyComponent } from "./components/repeat/yearly/yearly.component";

@NgModule({
  declarations: [
    NgxRruleComponent,
    StartComponent,
    EndComponent,
    RepeatComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [NgxRruleComponent],
})
export class NgxRruleModule {}
