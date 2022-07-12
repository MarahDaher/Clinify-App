import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public route: Router;
  public projectDirection: string = 'rtl';
  public translate: TranslateService;

  constructor(
    injector: Injector
    ) {
    this.route = injector.get(Router);
    this.translate = injector.get(TranslateService);
    
    this.translate.onLangChange.subscribe((event) =>{
      this.changeDirction(event?.lang);
      console.log(this.projectDirection);
    });
  }
  
  public navigate(url: string) {
    this.route.navigate([url]);
  }

  public changeDirction(dir : string){
    if (dir == 'en') {
      this.projectDirection = 'ltr';
    } 
    if (dir == 'ar') {
      this.projectDirection = 'rtl';
    };  
  }

}
