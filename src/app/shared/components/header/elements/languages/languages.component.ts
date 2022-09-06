import { Component, Injector, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService, Menu } from '../../../../services/nav.service';
import { BaseComponent } from '../../../base.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent extends BaseComponent implements OnInit {

  public language: boolean = false;

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  // {
  //   language: 'Español',
  //   code: 'es',
  //   icon: 'es'
  // },
  // {
  //   language: 'Français',
  //   code: 'fr',
  //   icon: 'fr'
  // },
  // {
  //   language: 'Português',
  //   code: 'pt',
  //   type: 'BR',
  //   icon: 'pt'
  // },
  {
    language: 'العربية',
    code: 'ar',
    type: 'AR',
    icon: 'sy'
  }];

  public selectedLanguage: any =   {
    language: 'العربية',
    code: 'ar',
    type: 'AR',
    icon: 'sy'
  };
  
  constructor(
    injector :Injector,
    private translate: TranslateService,
    public navServices: NavService) {
      super(injector);
    }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang.code);
    this.utility.translate
    this.selectedLanguage = lang;
  }

}
