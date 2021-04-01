import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {

  @Output() displayClicked : EventEmitter<any> = new EventEmitter<any>();
  @Output() editClicked : EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClicked : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public edit() : void {
    console.log("edit1");
    this.editClicked.emit();
  }

  public display() : void {
    console.log("display1");
    this.displayClicked.emit();
  }

  public deleteX() {
    console.log("delete1");
    this.deleteClicked.emit();
  }

}
