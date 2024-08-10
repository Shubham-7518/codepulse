import { Token } from '@angular/compiler';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';



export const authGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getUser();


  //Check for the JWT tocken
  let tocken = cookieService.get("Authorization");


  if(tocken && user){

    tocken=tocken.replace('Bearer','')
    const decodeToken:any = jwtDecode(tocken);

    //Check if the token has expired
    const expirationDate = decodeToken.exp * 1000;
    const currentTime = new Date().getDate();

    if(expirationDate<currentTime){
      authService.logOut();
      return router.createUrlTree(['/login'],{queryParams:{returnUrl:state.url}});
    }
    else{
      //Token is still valid
      if(user.roles.includes("Writer"))
        return true;
      else{
        alert("Unauthorized")
        return false;
      }

    }

  }
  else{
    authService.logOut();
    return router.createUrlTree(['/login'],{queryParams:{returnUrl:state.url}});
  }
};
