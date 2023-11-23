import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
/*
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private securityService:SecurityService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let theUser=this.securityService.userActiveSession
    const token = theUser["token"];
    // Si la solicitud es para la ruta de "login", no adjuntes el token
    if (request.url.includes('/login')) {
      console.log("no se pone token")
      return next.handle(request);
    }
    console.log("colocando token "+token)
    // Adjunta el token a la solicitud
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Continúa con la solicitud modificada
    return next.handle(authRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/dashboard');
        }else if (err.status === 400) {
          Swal.fire({

            title: 'No tiene permisos',
            icon: 'error',
            timer: 5000
          });
        }

        return new Observable<never>();

      }));
  }
}*/
