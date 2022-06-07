import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteAllComponent } from '../../components/dialog-delete-all/dialog-delete-all.component';
import { DialogDeleteOneComponent } from '../../components/dialog-delete-one/dialog-delete-one.component';
import { DialogIsLoggedInComponent } from '../../components/dialog-is-logged-in/dialog-is-logged-in.component';
import { DialogLogoutComponent } from '../../components/dialog-logout/dialog-logout.component';
// import { DialogDeleteAllComponent } from '../dialog-delete-all/dialog-delete-all.component';
// import { DialogDeleteOneComponent } from '../dialog-delete-one/dialog-delete-one.component';
// import { DialogLogoutComponent } from '../dialog-logout/dialog-logout.component';
// import { IsLoggedInDialogComponent } from '../is-logged-in-dialog/is-logged-in-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }


  openDeleteOneDIalog(){
    return this.dialog.open(DialogDeleteOneComponent)
  }
  openDeleteAllDialog(){
    return this.dialog.open(DialogDeleteAllComponent)
  }
  openIsLoggedInDialog(){
    return this.dialog.open(DialogIsLoggedInComponent)
  }
  opensLogOutDialog(){
    return this.dialog.open(DialogLogoutComponent)
  }

}
