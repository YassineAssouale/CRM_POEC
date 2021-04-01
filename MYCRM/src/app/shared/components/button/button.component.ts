import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() title: string;
  @Input() href: string;
  @Input() route: string;
  @Input() isButton: boolean;
  @Output() buttonClicked : EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public redirect() {
    this.buttonClicked.emit();
  }

}
