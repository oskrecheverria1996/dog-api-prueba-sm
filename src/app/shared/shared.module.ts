import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { PageBodyComponent } from "./components/page-body/page-body.component";
import { DelayInputDirective } from './directives/delay-input.directive';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    PageHeaderComponent,
    PageBodyComponent,
    DelayInputDirective,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent,
    PageBodyComponent,
    DelayInputDirective,
    LoadingComponent
  ]
})
export class SharedModule { }
