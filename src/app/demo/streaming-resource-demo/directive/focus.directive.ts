import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit {
  elm = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {}

  ngOnInit(): void {
    this.elm.nativeElement.focus();
  }
}
