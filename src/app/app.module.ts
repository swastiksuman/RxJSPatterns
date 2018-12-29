import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserEventComponent } from './browser-event/browser-event.component';
import { EventBusComponent } from './event-bus/event-bus.component';
import { EmployeeListComponent } from './event-bus/employee-list/employee-list.component';
import { EmployeeCounterComponent } from './event-bus/employee-counter/employee-counter.component';

const applicationRoute: Routes = [
  { path: 'browser-event', component: BrowserEventComponent},
  { path: 'event-bus', component: EventBusComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventComponent,
    EventBusComponent,
    EmployeeListComponent,
    EmployeeCounterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
