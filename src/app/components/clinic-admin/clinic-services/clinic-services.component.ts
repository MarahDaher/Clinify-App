import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-services',
  templateUrl: './clinic-services.component.html',
  styleUrls: ['./clinic-services.component.scss']
})
export class ClinicServicesComponent implements OnInit {

  //List
  clinicServices = [
    {
      id: 1, service: 'إزالة الشعر', showServiceParts: true, showDetails: false,
    },
    {
      id: 2, service: 'العناية بالبشرة' , showServiceParts: false,showDetails: true,
    },
    {
      id: 3, service: 'عيادة التغذية' , showServiceParts: false,showDetails: true,
    },    
    {
      id: 4, service: 'قسم التنحيف' , showServiceParts: false,showDetails: true,
    },
    {
      id: 5, service: 'الليزر الطبي', showServiceParts: false,showDetails: true,
    },
    {
      id: 6, service: 'العناية السنية' , showServiceParts: false,showDetails: true,
    },    
    {
      id: 7, service: 'العناية النسائية' , showServiceParts: false,showDetails: true,
    },
    {
      id: 8, service: 'LGP' , showServiceParts: false,showDetails: true,
    },
    {
      id: 9, service: 'الاستشارات' , showServiceParts: false,showDetails: true,
    },
    {
      id: 10, service: 'حقن الفيلر و البوتوكس' , showServiceParts: false,showDetails: true,
    },
    {
      id: 10, service: 'تجميل الاسنان' , showServiceParts: false,showDetails: true,
    },
    {
      id: 10, service: 'الجراحة التجميلية' , showServiceParts: true,showDetails: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
