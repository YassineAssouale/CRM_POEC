import { Component, Input, OnInit, Output, EventEmitter, PipeTransform, Pipe } from '@angular/core';
import { Customer } from '../../models/customer';
import { Order } from '../../models/order.model';
@Component({
  selector: 'app-array-generic',
  templateUrl: './array-generic.component.html',
  styleUrls: ['./array-generic.component.scss'],
})
export class ArrayGenericComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() tabLabels: any[];
  @Input() tabData: any[];
  //  @Output() clickClientEvent: EventEmitter<any> = new EventEmitter();

  public map = new Map<string, string>();

  ngOnInit(): void {
  }

  /*public sendEvent(): void {
    this.clickClientEvent.emit();
  }*/

}



