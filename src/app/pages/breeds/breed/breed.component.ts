import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreedsFacade } from '../breeds.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  breedData$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  detailData: any;
  breed: string = '';
  subBreed: string = '';

  constructor(
    public breedsFacade: BreedsFacade,
    private route: ActivatedRoute,
  ) {
    this.breedData$ = this.breedsFacade.getDetailBreed$();
    // this.breedsFacade.getDetailData$().subscribe((res) => {
    //   this.detailData = res
    // });
    this.isLoading$ = this.breedsFacade.isLoadingSingle$();
   }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
        this.breed = params['itemId'];
        if (params['subItemId']) {
          this.subBreed = params['subItemId'];
          this.breedsFacade.getBreedImage(params['itemId'], params['subItemId']);
        } else {
          this.breedsFacade.getBreedImage(params['itemId']);
        }
      })
    )
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
