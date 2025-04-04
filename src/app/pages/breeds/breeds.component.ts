import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreedsFacade } from './breeds.facade';
import { Router } from '@angular/router';
import { TreeTable } from 'primeng/treetable';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
  standalone: false
})
export class BreedsComponent implements OnInit, OnDestroy {

  @ViewChild('tt') tt: TreeTable | undefined;

  subscriptions: Subscription = new Subscription();
  list$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  searchText: string;
  cols = [
    { field: 'name', header: 'Nombre raza' },
  ];

  constructor(
    public breedsFacade: BreedsFacade,
    private router: Router,
  ) {
    this.list$ = this.breedsFacade.getList$();
    this.isLoading$ = this.breedsFacade.isLoading$();
   }

  ngOnInit(): void {
    this.breedsFacade.getBreedsList();
  }
  
  changePage(event) {
    
  }
  
  edit(event) {
    if(!event.node.parent) {
      this.router.navigate(['breeds/' + event.node.data.name]);
    } else{
      this.router.navigate(['breeds/' + event.node.parent.data.name + '/' + event.node.data.name]);
    }
  }

  search($event) {
    this.tt!.filterGlobal($event.target.value, 'contains');
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
