import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';
// creates an instance of Jquery with JQ_Token injected
@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  // opens up the modal with line 14
  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$('#simple-modal').modal({});
    });
  }
}
