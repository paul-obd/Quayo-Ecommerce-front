import { Component, Input, OnInit } from '@angular/core';
import { AttributeValue } from '../../../shared/models/e-commerce/attribute-value.model';
import { AttributeValueService } from '../../../shared/services/e-commerce/attribute-value.service';
import { ItemsService } from '../../../shared/services/e-commerce/items.service';
import { LoadingService } from '../../../shared/services/e-commerce/loading.service';


@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.css']
})
export class FilterCheckboxComponent implements OnInit {

  @Input() attrValue: AttributeValue

  checked: boolean = false

  constructor(private itemsService: ItemsService,
     private attributeValueService: AttributeValueService,
      public loadingService: LoadingService) { }

  ngOnInit(): void {
  }


  getOrRemoveItems(){
   
    if ( this.itemsService.searchMode == true) {
      this.itemsService.openSearch = false
      this.itemsService.searchMode = false
      this.itemsService.searchVar = '';
    }
    this.loadingService.loadSpinner = true
    if (this.checked ==  true ) {
     
        this.itemsService.filterAttributeValuesCode.push(this.attrValue.attributeValueCode)
        
        this.itemsService.items = []
        this.itemsService.filterScrollerTimes = 1
        this.itemsService.getItemsByAttributes()
        .subscribe(
          (res)=>{
            this.itemsService.items = res.response 
            this.itemsService.filterScrollerTimes = 2
            this.loadingService.loadSpinner = false
          }
        )
    }
    else{
   
     var index = this.itemsService.filterAttributeValuesCode.indexOf(this.attrValue.attributeValueCode)
     this.itemsService.filterAttributeValuesCode.splice(index, 1)
     if (this.itemsService.filterAttributeValuesCode.length == 0) {
       this.itemsService.items = []
       this.itemsService.scrolledTimes = 1
       this.itemsService.getItems().subscribe(
         (res)=>{
           this.itemsService.items = res.response 

           this.itemsService.scrolledTimes = 2
           this.loadingService.loadSpinner = false

         }
       )
     }
     else{
       this.itemsService.items = []
       this.itemsService.filterScrollerTimes = 1
       this.itemsService.getItemsByAttributes().subscribe(
        (res)=>{
          this.itemsService.items = res.response 

          this.itemsService.filterScrollerTimes = 2
          this.loadingService.loadSpinner = false
        }
      )
     }
    }
  }
}
