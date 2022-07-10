import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';  

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public route: Router;
  public projectDirection: string = 'rtl';


  constructor(
    injector: Injector
    ) {
    this.route = injector.get(Router);
  }
  
  public navigate(url: string) {
    this.route.navigate([url]);
  }

}
