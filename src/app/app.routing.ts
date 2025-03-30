import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./core/layout/layout.component";

const routes: Routes =[
  { path: '', redirectTo: 'breeds', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
          path: "breeds",
          loadChildren: () =>
          import("./pages/breeds/breeds.module").then(
              (m) => m.BreedsModule
          ),
        }
      ]
    },
  { path: '', redirectTo: 'breeds', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'breeds' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
