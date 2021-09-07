import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit {
  @Input('appHighLight') appHighLightc = 'blue';

  // directives là các class bổ xung hành vi cho các phần tử trong app
  // có 3 loại directive là :
  // components
  // Attribute directives dùng để thay đổi giao diện hoặc hành vi của các phần tử trong DOM
  // Structural directives dùng để thay đổi bố cục DOM = cách thêm hoặc xoá các ptử trong DOM,
  // ví dụ : ngIf,ngFor,...

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = this.appHighLightc;
    // console.log('appHighLight contructor', this.appHighLightc);
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLightc;
    // console.log('appHighLight oninit', this.appHighLightc);
  }
}
