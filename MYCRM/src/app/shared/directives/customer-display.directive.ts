import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Customer } from '../models/customer';

@Directive({
  selector: '[appCustomerDisplay]'
})
export class CustomerDisplayDirective implements OnChanges{

  @Input() appCustomerDisplay : String;
  @HostBinding('class') className : string ;

  constructor() { }

  ngOnChanges(): void {
    this.className = this.affichage();
  }

  public affichage(): string {
    if(this.appCustomerDisplay === "" || this.appCustomerDisplay===null){
       return  "noAffiche";
     }
  }

}
