import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appOrderHtColor]'
})

export class OrderHtColorDirective {

  @Input() appOrderHtColor: number;
  @HostBinding('class') classname: string;

  constructor() {}

  ngOnChanges(): void {
    this.classname = this.formatHTColor(this.appOrderHtColor);
  }

  private formatHTColor (value : number): string {
    if (value < 5000){
      return 'under5k';
    } else if (value > 10000) {
      return 'upper10k';
    }
  }
}
