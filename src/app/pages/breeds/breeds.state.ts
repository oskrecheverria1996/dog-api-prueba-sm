import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class BreedsState {
    private list$ = new BehaviorSubject<any>([]);
    private loading$ = new BehaviorSubject<boolean>(false);
    private detailBreed$ = new BehaviorSubject<any>({});
    private loadingSingle$ = new BehaviorSubject<boolean>(false);

    setList(results: any[]) {
        this.list$.next(results);
    }

    getList$() {
        return this.list$.asObservable();
    }

    setDetailBreed(result) {
        this.detailBreed$.next(result);
    }

    getDetailBreed$(): Observable<any> {
        return this.detailBreed$.asObservable();
    }

    isLoading$(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    setLoading(isLoading: boolean): void {
        this.loading$.next(isLoading);
    }

    isLoadingSingle$(): Observable<boolean> {
        return this.loadingSingle$.asObservable();
    }

    setLoadingSingle(isLoadingSingle: boolean): void {
        this.loadingSingle$.next(isLoadingSingle);
    }
}