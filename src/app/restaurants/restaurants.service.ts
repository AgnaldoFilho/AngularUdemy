import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";
import { errorHandler } from "@angular/platform-browser/src/browser";

@Injectable()
export class RestaurantsService {


    constructor(private http: Http) {}

    restaurants() : Observable<Restaurant[]> {
         return this.http.get(`${MEAT_API}/restaurants`)
         .map(response => response.json())
         .catch(ErrorHandler.handlerError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(x => x.json()).catch(ErrorHandler.handlerError);
    }
}