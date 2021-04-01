import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSelectBackgroundColor]'
})
export class SelectBackgroundColorDirective {

  @Input() appSelectBackgroundColor : string;
  @HostBinding('class') classname : string;

  constructor() { }

  ngOnChanges() : void {
    this.classname = this.formatBackgroundColor(this.appSelectBackgroundColor);
  }

  private formatBackgroundColor(value : string): string {
    switch(value) {
      case 'DEBUTANT' : {
        return "beginner";
      }
      case 'CONFIRME' : {
        return "advanced";
      }
      case 'EXPERT' : {
        return "expert";
      }
      case 'ACTIF' : {
        return "active";
      }
      case 'INACTIF' : {
        return "idle";
      }
    }
  }

}
