import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from './app.routing';
import { BrowserModule, Title } from "@angular/platform-browser";
// import { ToastrModule } from "ngx-toastr";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
  //   ToastrModule.forRoot(
  //     {
  //         preventDuplicates: true,
  //         resetTimeoutOnDuplicate:true
  //     }
  // ),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
