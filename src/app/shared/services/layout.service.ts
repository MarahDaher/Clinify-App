import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public config = {
    settings: {
      layout: 'Dubai',
      layout_type: 'rtl',
      layout_version: 'light-only',
      sidebar_type: 'default-sidebar'
    },
    color: {
      primary_color: '#7366ff', 
      secondary_color: '#f73164'
    }
  }

  constructor(
    translate: TranslateService
    ) { 
    if(this.config.settings.layout_type == 'rtl')
      document.getElementsByTagName('html')[0].setAttribute('dir', this.config.settings.layout_type);

    document.documentElement.style.setProperty('--theme-deafult', this.config.color.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.config.color.secondary_color);

    translate.onLangChange.subscribe(res=>{
      if (res?.lang == 'en') {
        this.config.settings.layout_type = 'ltr'
      };     
      if (res?.lang == 'ar') {
        this.config.settings.layout_type = 'rtl'
      };   
      // change all dir in project    
      document.getElementsByTagName('html')[0].setAttribute('dir', this.config.settings.layout_type)
    })
  }


}
