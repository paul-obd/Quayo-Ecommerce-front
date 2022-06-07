import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/e-commerce/snackbar.service';

@Injectable({ providedIn: 'root' })
export class IsLoggedInInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService,private route: Router, 
    private translate: TranslateService, private _snackbar: SnackbarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    let tokenizedReq = request.clone()
    
    return next.handle(tokenizedReq)
    .pipe(
      catchError((err: HttpErrorResponse)=>{
         if(err.error.status == 403){
           console.log('la2at')
          this._authService.logout().subscribe(
            (res: any)=>{
              this._authService.clearTokenCookie()
              this.route.navigate(['/login'])
              this.translate.stream("You've Been Forced To Logout").subscribe(res => this._snackbar.openErrSnackBar(res))
            }
          )
        }
        return throwError(err)
      })
      );
  }
}
