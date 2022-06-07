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
import { IsLoggedInInterceptor } from "./interceptors/is-logged-in.interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";



@NgModule({
  imports: [
    CommonModule, 
    MatIconModule,
    MatDialogModule,
    HttpClientModule
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
  ],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: IsLoggedInInterceptor,
//       multi: true
//     }
// ],

})
export class SharedModule {}
