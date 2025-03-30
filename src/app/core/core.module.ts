import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { LayoutComponent } from "./layout/layout.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { PaginatorModule } from "primeng/paginator";

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ClipboardModule,
    RouterModule,
    TableModule,
    PaginatorModule
  ],
  exports: [
    FormsModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent
],
})
export class CoreModule { }
