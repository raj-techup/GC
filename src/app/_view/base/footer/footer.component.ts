import { Component, OnInit } from '@angular/core';
declare var $: any;
// import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  imagesource:any;
  step = '';
  constructor() { }

  ngOnInit(): void {
    this.imagesource= localStorage.getItem('imagesource');

  }
  ScrollTop()
  {
       var target = "html";
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
  }

}
