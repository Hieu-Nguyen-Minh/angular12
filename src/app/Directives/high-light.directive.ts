import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit {
  @Input('appHighLight') appHighLightc = 'blue';

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = this.appHighLightc;
    // console.log('appHighLight contructor', this.appHighLightc);
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLightc;
    // console.log('appHighLight oninit', this.appHighLightc);
  }
}
