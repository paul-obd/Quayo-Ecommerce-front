import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../shared/services/e-commerce/basket.service';
import { DialogService } from '../../shared/services/e-commerce/dialog.service';
import { ResponsiveService } from '../../shared/services/e-commerce/responsive.service';
import { ToolbarService } from '../../shared/services/e-commerce/toolbar.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(public toolbarService: ToolbarService,public basketService: BasketService, 
    public responsiveService: ResponsiveService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.basketService.doTotal()
  }


  deleteAllFromBasket(){
    this.dialogService.openDeleteAllDialog().afterClosed().subscribe(
      (result)=>{
        if(result == 'true'){
          this.basketService.basket = []
        }
      }
    )

  }
}
