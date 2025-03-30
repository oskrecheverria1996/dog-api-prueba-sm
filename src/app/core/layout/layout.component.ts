import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AppConfig } from "../../app.config";

@Component({
  standalone: false,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // isMobileResolution: boolean;
  //   hiddenNavbar = (this.AppConfig.getConfig('ui') && this.AppConfig.getConfig('ui').hiddenNavbar)
  //       ? this.AppConfig.getConfig('ui').hiddenNavbar : false;


  constructor(
    private activatedRoute: ActivatedRoute,
    // private AppConfig: AppConfig
  ) {
    // if (window.innerWidth < 1200) {
    //   this.isMobileResolution = true;
    // } else {
    //     this.isMobileResolution = false;
    // }
  
  }

  ngOnInit(): void {
  }

}
