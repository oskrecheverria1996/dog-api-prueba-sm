import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsComponent } from './breeds.component';
import { BreedComponent } from './breed/breed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListRoutes } from './breeds.routing';
import { BreedsFacade } from './breeds.facade';
import { BreedsState } from './breeds.state';
import { SharedModule } from '../../shared/shared.module';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';


@NgModule({
  declarations: [
    BreedsComponent,
    BreedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    MenuModule,
    MultiSelectModule,
    SharedModule,
    StepsModule,
    TableModule,
    TabViewModule,
    TreeModule,
    TreeTableModule,
    PaginatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(ListRoutes), 
  ],
  providers: [
    BreedsFacade,
    BreedsState
  ],
})
export class BreedsModule { }
