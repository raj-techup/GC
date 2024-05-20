import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare var $: any;
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  imagesource: any;

  @ViewChild('search') myTestDiv!: ElementRef;
  @ViewChild('mobilesearch') mobilesearch!: ElementRef;
  step = '';
  constructor(private router: Router) {
    // this.onClick(this.share.active)
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {




        // if (ev.url == "/about") {
        //   console.log("this is about")
        //   this.step = 'step1';
        // } else if (ev.url == "/technology") {
        //   this.step = 'step2';
        // } else if (ev.url == "/products") {
        //   this.step = 'step3';
        // } else if (ev.url == "/provider") {
        //   this.step = 'step4';
        // } else if (ev.url == "/patients") {
        //   this.step = 'step5';
        // }else if (ev.url == "/media") {
        //   this.step = 'step8';
        // } else if (ev.url == "/Conference") {
        //   this.step = 'step9';
        // } else if (ev.url == "/contactus") {
        //   this.step = 'step6';
        // }
        // else if (ev.url == "/careers") {
        //   this.step = 'step7';
        // } else if (ev.url == "/technology/healthindex") {
        //   this.step = 'step2';
        // } else if (ev.url == "/technology/peptidedesign") {
        //   this.step = 'step2';
        // }
        // else if (ev.url == "/product/ActiveDisease") {
        //   this.step = 'step3';
        // }
        // else if (ev.url == "/product/Prevention") {
        //   this.step = 'step3';
        // } else if (ev.url == "/") {
        //   this.step = '';
        // }else if (ev.url == "/termsofuse") {
        //   this.step = '';
        // }else if (ev.url == "/privacy-policy") {
        //   this.step = '';
        // }


        switch (ev.url) {    
          case "/about":
            this.step = 'step1';
            break;
          case "/technology":
          case "/technology/healthindex":
          case "/technology/peptidedesign":
            this.step = 'step2';
            break;
          case "/products":
          case "/product/ActiveDisease":
          case "/product/Prevention":
            this.step = 'step3';
            break;
          case "/provider":
            this.step = 'step4';
            break;
          case "/patients":
            this.step = 'step5';
            break;
          case "/media":
            this.step = 'step8';
            break;
          case "/Conference":
            this.step = 'step9';
            break;
            case "/peptide":
            this.step = 'step10';
            break;
            case "/peptides":
              this.step = 'step11';
            break;
          
          case "/contactus":
          case "/careers":
          case "/termsofuse":
          case "/privacy-policy":
          case "/":
            this.step = '';
            break;
        }

        



      }
    });

  }





  ngAfterViewInit() {
    this.myTestDiv.nativeElement.disabled = false
    this.mobilesearch.nativeElement.disabled = false
    // console.log(this.share.active)
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('Is first change?');
  // }


  ngOnInit(): void {
    // this.imagesource= localStorage.getItem('imagesource');
    // console.log(this.share.active)
    // if(this.router.url== "/about"){
    //   console.log("this is about")
    //   this.step = 'step1';
    // }else if(this.router.url== "/technology"){
    //   this.step = 'step2';
    // }else if(this.router.url== "/products"){
    //   this.step = 'step3';
    // }else if(this.router.url== "/physicians"){
    //   this.step = 'step4';
    // }else if(this.router.url== "/patients"){
    //   this.step = 'step5';
    // }else if(this.router.url== "/contactus"){   
    //   this.step = 'step6';
    // }
    // else if(this.router.url== "/careers"){
    //   this.step = 'step7';
    // } else if(this.router.url== "/home"){
    //   this.step = '';
    // }
  }

  onClick(check: any) {
    //    console.log(check);
    this.step = check >= 1 && check <= 9 ? `step${check}` : '';

    // if (check == 1) {
    //   this.step = 'step1';
    // } else if (check == 2) {
    //   this.step = 'step2';
    // } else if (check == 3) {
    //   this.step = 'step3';
    // } else if (check == 4) {
    //   this.step = 'step4';
    // } else if (check == 5) {
    //   this.step = 'step5';
    // } else if (check == 6) {
    //   this.step = 'step6';
    // } else if (check == 7) {
    //   this.step = 'step7';
    // } else if (check == 8) {
    //   this.step = 'step8';
    // } else if (check == 9) {
    //   this.step = 'step9';
    // } else {
    //   this.step = '';
    // }
  }



  OpenMobileMenu() {
    $('body').addClass('mobile-menu-visible');
  }
  CloseMobileMenu() {
    $('body').removeClass('mobile-menu-visible');
  }
  DropdownbtnMobileMenu(id: any) {
    if (id == 1) {
      $('#menu2').css("display", "none");
      $('#menu3').css("display", "none");
      $('#menu1').slideToggle(500);
    }
    if (id == 2) {
      $('#menu1').css("display", "none");
      $('#menu3').css("display", "none");
      $('#menu2').slideToggle(500);
    }
    if (id == 3) {
      $('#menu1').css("display", "none");
      $('#menu2').css("display", "none");
      $('#menu3').slideToggle(500);
    }
  }
}
