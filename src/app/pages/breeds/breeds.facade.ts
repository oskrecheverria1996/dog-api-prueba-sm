import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../api/api-services.service";
import { BreedsState } from "./breeds.state";
import { finalize, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { NotificationsService } from "../../shared/common/notifications.service";

@Injectable()
export class BreedsFacade {
    constructor(
        private apiServicesService: ApiServicesService,
        private breedsState: BreedsState,
        private notificationsService: NotificationsService,
    ) { }

    getBreedsList() {
        this.breedsState.setLoading(true)
        this.apiServicesService.getBreeds()
        .pipe(finalize(() => this.breedsState.setLoading(false)))
        .subscribe(
            (res) => {
                let list = Object.entries(res.message).map(([key, value]) => (
                    { 
                        data: {name: key},
                        children: Object.entries(value).map(([item, val]) => (
                            { 
                                data: {name: val},
                            }
                        ))
                    }
                ));
                this.breedsState.setList(list);
            },
            (err) => {
                this.notificationsService.error(err.error.status_message, 'Error');
            }
        )
    }
       
    getBreedImage(breed, subBreed?) {
        this.breedsState.setLoadingSingle(true);
        this.apiServicesService.getBreedImage(breed, subBreed)
        .pipe(finalize(() => this.breedsState.setLoadingSingle(false)))
        .subscribe(
            (res) => {
                this.breedsState.setDetailBreed(res);
            },
            (err) => {
                this.notificationsService.error(err.error.status_message, 'Error')
            }
        )
    }

    getList$(): Observable<any[]> {
        return this.breedsState.getList$();
    }

    getDetailBreed$(): Observable<any[]> {
        return this.breedsState.getDetailBreed$();
    }

    isLoading$(): Observable<boolean> {
        return this.breedsState.isLoading$();
    }
    
    isLoadingSingle$(): Observable<boolean> {
        return this.breedsState.isLoadingSingle$();
    }
}