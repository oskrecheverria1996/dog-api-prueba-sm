import { Routes } from "@angular/router";
import { BreedsComponent } from "./breeds.component";
import { BreedComponent } from "./breed/breed.component";

export const ListRoutes: Routes = [
    {
        path: '',
        component: BreedsComponent,
    },
    {
        path: ':itemId',
        component: BreedComponent,
    },
    {
        path: ':itemId/:subItemId',
        component: BreedComponent,
    }
]