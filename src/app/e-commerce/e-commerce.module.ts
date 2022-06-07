import { NgModule } from '@angular/core';


import { ECommerceRoute } from './e-commerce.routing';
// import { AppComponent } from './app.component';
// import { MaterialModule } from './material/material.module';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
// import { ItemDetailsComponent } from './item-details/item-details.component';
// import {OrderTotalService} from './services/order-total.service'
// import {ItemsService} from './services/items.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ToolbarService } from './services/toolbar.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { FilterComponent } from './filter/filter.component';
// import { AttributeValueService } from './services/attribute-value.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { BasketComponent } from './basket/basket.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { SortByComponent } from './sort-by/sort-by.component';

import { ItemsTableComponent } from './items-table/items-table.component';
import { TableItemComponent } from './table-item/table-item.component';

import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { DevExtremeModule, DxTemplateModule, DxDataGridModule, DxGalleryModule, DxButtonModule } from 'devextreme-angular';

import { CarouselComponent } from './carousel/carousel.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

import { RouterModule } from '@angular/router';
import { ECommerceMainPageComponent } from './e-commerce-main-page/e-commerce-main-page.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FilterComponent } from './filters/filter/filter.component';
import { FilterAttrComponent } from './filters/filter-attr/filter-attr.component';
import { FilterCheckboxComponent } from './filters/filter-checkbox/filter-checkbox.component';
import { DialogDeleteOneComponent } from '../shared/components/dialog-delete-one/dialog-delete-one.component';
import { DialogDeleteAllComponent } from '../shared/components/dialog-delete-all/dialog-delete-all.component';
import { DialogLogoutComponent } from '../shared/components/dialog-logout/dialog-logout.component';

import { CommonModule } from '@angular/common';
import { CompanyInfoService } from '../shared/services/e-commerce/company-info.service';
import { CarouselService } from '../shared/services/e-commerce/carousel.service';
import { OrderTotalService } from '../shared/services/e-commerce/order-total.service';
import { ItemsService } from '../shared/services/e-commerce/items.service';
import { ToolbarService } from '../shared/services/e-commerce/toolbar.service';
import { LoadingService } from '../shared/services/e-commerce/loading.service';
import { AttributeValueService } from '../shared/services/e-commerce/attribute-value.service';
import { ResponsiveService } from '../shared/services/e-commerce/responsive.service';
import { IsLoggedInInterceptor } from '../shared/interceptors/is-logged-in.interceptor';
import { SharedModule } from '../shared/shared.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
};

@NgModule({
  declarations: [
    ECommerceMainPageComponent,
    ItemsComponent,
    ItemComponent,
    ToolbarComponent,
    FilterComponent,
    HomeComponent,
    SearchComponent,
    BasketComponent,
    BasketItemComponent,
    SortByComponent,
    ItemsTableComponent,
    TableItemComponent,
    FilterAttrComponent,
    FilterCheckboxComponent,
    DialogDeleteOneComponent,
    DialogDeleteAllComponent,
    DialogLogoutComponent,
    CarouselComponent,
    CompanyInfoComponent
  ],
  imports: [

    CommonModule,
    RouterModule.forChild(ECommerceRoute),
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    DevExtremeModule,
    DxTemplateModule,
    DxDataGridModule,
    DxGalleryModule,
    DxButtonModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      }) ,

     
  ],
  providers: [CompanyInfoService,CarouselService,OrderTotalService,
    ItemsService, ToolbarService, LoadingService, AttributeValueService, ResponsiveService,
    TranslateService,
  
  ]

})
export class ECommerceModule { }

