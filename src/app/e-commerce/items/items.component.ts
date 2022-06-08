import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { Subscription } from 'rxjs';
import { Item } from '../../shared/models/e-commerce/Item.model';
import { QuayoExceptionResponse } from '../../shared/models/quayoExceptionResponse';
import { SnackBarService } from '../../shared/services/common/snackBarService';
import { AttributeValueService } from '../../shared/services/e-commerce/attribute-value.service';
import { ItemsService } from '../../shared/services/e-commerce/items.service';
import { LoadingService } from '../../shared/services/e-commerce/loading.service';
import { ResponsiveService } from '../../shared/services/e-commerce/responsive.service';
import { ToolbarService } from '../../shared/services/e-commerce/toolbar.service';
// import { AttributeValue } from '../models/attribute-value.model';
// import { Item } from '../models/Item.model';
// import { AttributeValueService } from '../services/attribute-value.service';
// import { ItemsService } from '../services/items.service';
// import { LoadingService } from '../services/loading.service';
// import { ResponsiveService } from '../services/responsive.service';
// import { ToolbarService } from '../services/toolbar.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {




  constructor(public itemsService: ItemsService,
    public toolbarService: ToolbarService,
    public loadingService: LoadingService,
    private attributeValueService: AttributeValueService,
    public responsiveService: ResponsiveService,
    private _snackBarService: SnackBarService) {


  }



  request: Subscription;


  ngOnDestroy(): void {
  
    this.toolbarService.ouOfHome = true
  }

  public async ngOnInit() {
  

    this.toolbarService.ouOfHome = false
    if (this.itemsService.searchVar != null && this.itemsService.searchMode == true) {

      this.itemsService.searchScrolledTimes = 1
      this.itemsService.items = []
      await this.searchItems()

    }

    else if (this.itemsService.filterAttributeValuesCode.length > 0) {
      this.itemsService.items = []
      this.itemsService.filterScrollerTimes = 1
      await this.getItemsByAttributes()

    }

    else {
      await this.initItems()

    }

  }



  public async initItems() {
    this.loadingService.loadBar = true
    this.itemsService.scrolledTimes = 1
    this.request = this.itemsService.getItems().subscribe(
      (itemsRes) => {
        this.itemsService.items = itemsRes.response
        this.itemsService.scrolledTimes = 2
        this.loadingService.loadBar = false
      },
      (error) => {
        const quayoExceptionResponse = error.error as QuayoExceptionResponse;
        if (quayoExceptionResponse.ExceptionType) {
          if (quayoExceptionResponse.ExceptionType === "Buisness") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_business_exception"
            );
          }

          if (quayoExceptionResponse.ExceptionType === "Technical") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_technical_exception"
            );
          }
        } else {
          this._snackBarService.openSnackBar(
            "NO CONNECTION",
            "custom_icon_technical_exception",
            3,
            true
          );
        }

      }
    )
  }

  public async onScroll() {

      if (this.loadingService.paginationLoad == true) {
        return;
       
      }

      var content = document.getElementById('content') as HTMLDivElement

      if ((content.scrollTop + content.clientHeight) / content.scrollHeight > 0.9) {

        if (this.itemsService.searchVar !== null && this.itemsService.searchVar !== '' && this.itemsService.searchVar !== undefined) {

          await this.searchItems()



        }

        else if (this.itemsService.filterAttributeValuesCode.length > 0) {

          await this.getItemsByAttributes()

        }

        else {

          await this.getItems()


        }



      }
    }
  



  public async getItems() {

    this.loadingService.paginationLoad = true
    this.request = this.itemsService.getItems().subscribe(
      (itemsRes) => {
        itemsRes.response.forEach(item => {
          this.itemsService.items.push(item)
        });
        this.loadingService.paginationLoad = false
      },
      (error) => {
        const quayoExceptionResponse = error.error as QuayoExceptionResponse;
        if (quayoExceptionResponse.ExceptionType) {
          if (quayoExceptionResponse.ExceptionType === "Buisness") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_business_exception"
            );
          }

          if (quayoExceptionResponse.ExceptionType === "Technical") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_technical_exception"
            );
          }
        } else {
          this._snackBarService.openSnackBar(
            "NO CONNECTION",
            "custom_icon_technical_exception",
            3,
            true
          );
        }
        this.loadingService.paginationLoad = false
      }
    )

    this.itemsService.scrolledTimes += 1

  }

  public async getItemsByAttributes() {
    this.loadingService.paginationLoad = true
    this.request = this.itemsService.getItemsByAttributes().subscribe(
      (res) => {
        res.response.forEach(item => {
          this.itemsService.items.push(item)
        });
        this.loadingService.paginationLoad = false
      },
      (error) => {
        const quayoExceptionResponse = error.error as QuayoExceptionResponse;
        if (quayoExceptionResponse.ExceptionType) {
          if (quayoExceptionResponse.ExceptionType === "Buisness") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_business_exception"
            );
          }

          if (quayoExceptionResponse.ExceptionType === "Technical") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_technical_exception"
            );
          }
        } else {
          this._snackBarService.openSnackBar(
            "NO CONNECTION",
            "custom_icon_technical_exception",
            3,
            true
          );
        }
        this.loadingService.paginationLoad = false

      }
    )

    this.itemsService.filterScrollerTimes += 1

  }





  public async searchItems() {
    this.loadingService.paginationLoad = true
    this.request = this.itemsService.searchItems().subscribe(
      (res) => {
        res.response.forEach(item => {
          this.itemsService.items.push(item)
        });
        this.loadingService.paginationLoad = false
      },
      (error) => {
        const quayoExceptionResponse = error.error as QuayoExceptionResponse;
        if (quayoExceptionResponse.ExceptionType) {
          if (quayoExceptionResponse.ExceptionType === "Buisness") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_business_exception"
            );
          }

          if (quayoExceptionResponse.ExceptionType === "Technical") {
            this._snackBarService.openSnackBar(
              quayoExceptionResponse.UserMessage,
              "custom_icon_technical_exception"
            );
          }
        } else {
          this._snackBarService.openSnackBar(
            "NO CONNECTION",
            "custom_icon_technical_exception",
            3,
            true
          );
        }
        this.loadingService.paginationLoad = false
      }
    )
    this.itemsService.searchScrolledTimes += 1
  }
}
