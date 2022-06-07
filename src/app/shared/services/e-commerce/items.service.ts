import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpRequestType } from '../../constants/enums.constant';
import { Item } from '../../models/e-commerce/Item.model';
import { ApiRequestService } from '../api-request.service';


// general constants
const ECOMMERCE_CONTROLLER_NAME = "api/Ecommerce";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  items: Item[] = []
  scrolledTimes: number = 1;
  itemsNumber: number = 12;

  tableItems: Item[] = []
  

  filterScrollerTimes: number = 1;
  filterAttributeValuesCode: string[] = []



  searchVar: string;
  searchScrolledTimes: number = 1;

  searchMode: boolean = false
  openSearch: boolean = false


  sortBy: string = "none"




  
  constructor(private _apiRequestService: ApiRequestService) { }
   
  // getItemsPagination(){
  //   return this.http.get<Item[]>(       `items/all-items?sortBy=${this.sortBy}&scrolledTimes=${this.scrolledTimes}&itemsNumber=${this.itemsNumber}`  )
  // }
  getItems(): Observable<any>{
    const httpParams = new HttpParams()
    .set("scroll", this.scrolledTimes.toString())
    .set("itemsNb", this.itemsNumber.toString())
    .set("sortTag", this.sortBy)

    const res = this._apiRequestService.SendApiRequest(
      null,
      ECOMMERCE_CONTROLLER_NAME + '/get-items',
      HttpRequestType.GET,
      httpParams
    )
    .toPromise()
    .then(async (resData)=>{
      return resData
    })

    return from(res)

  }

  // getFilteredItemsOnlyByAttrValue(){
  //   return this.http.post<Item[]>
  //   (`Attributes/attribute-value-entity/?sortBy=${this.sortBy}&scrolledTimes=${this.filterScrollerTimes}
  //   &itemsNumber=${this.itemsNumber}`, this.filterAttributeValuesCode)
  // }

  getItemsByAttributes(): Observable<any>{
    const httpParams = new HttpParams()
    .set("scroll", this.scrolledTimes.toString())
    .set("itemsNb", this.itemsNumber.toString())
    .set("sortTag", this.sortBy)
    .set("attrValuesCode", this.filterAttributeValuesCode.toString())

    const res = this._apiRequestService.SendApiRequest(
      null,
      ECOMMERCE_CONTROLLER_NAME+ '/get-items-by-attributes',
      HttpRequestType.GET,
      httpParams
    )
    .toPromise()
    .then(async (resData)=>{
      return resData
    })

    return from(res)

  }

  getItemByCode(itemCode: string): Observable<any>{
    const httpParams = new HttpParams()
    .set("itemCode", itemCode)

    const res = this._apiRequestService.SendApiRequest(
      null,
      ECOMMERCE_CONTROLLER_NAME+ '/get-item-by-code',
      HttpRequestType.GET,
      null
    )
    .toPromise()
    .then(async (resData)=>{
      return resData
    })

    return from(res)
  }

  // searchAnItemWithPag(){
  //   return this.http.get<Item[]>(        
  //        `Items/search/${this.searchVar}?sortBy=${this.sortBy}&scrolledTimes=${this.searchScrolledTimes}
  //        &itemsNumber=${this.itemsNumber}`)
  // }

  searchItems(): Observable<any>{
    const httpParams = new HttpParams()
    .set("scroll", this.searchScrolledTimes.toString())
    .set("itemsNb", this.itemsNumber.toString())
    .set("sortTag", this.sortBy)
    .set("searchExpr", this.searchVar)

    const res = this._apiRequestService.SendApiRequest(
      null,
      ECOMMERCE_CONTROLLER_NAME+ '/search-items',
      HttpRequestType.GET,
      httpParams
    )
    .toPromise()
    .then(async (resData)=>{
      return resData
    })

    return from(res)
  }







  
}
