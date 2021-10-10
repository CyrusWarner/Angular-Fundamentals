import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';
// creates an instance of Jquery with JQ_Token injected
@Directive({
  selector: '[modal-trigger]',
})

// the input paramater can also select the identifier for the input and then we can name it what we want
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId:string
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  // opens up the modal with line 14
  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
