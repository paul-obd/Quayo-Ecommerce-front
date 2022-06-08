import "hammerjs";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective,
} from "./directives";
import { IconButtonComponent } from "./components/icon-button/icon-button.component";

import { MatIconModule } from "@angular/material/icon";
import { MatAnimatedIconComponent } from "./components/mat-animated-icon/mat-animated-icon.component";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogIsLoggedInComponent } from './components/dialog-is-logged-in/dialog-is-logged-in.component';




@NgModule({
  imports: [
    CommonModule, 
    MatIconModule,
    MatDialogModule,
    ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    IconButtonComponent,
    MatAnimatedIconComponent,
    DialogIsLoggedInComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    IconButtonComponent,
    MatAnimatedIconComponent,
    MatDialogModule,
  ]
})
export class SharedModule {}
