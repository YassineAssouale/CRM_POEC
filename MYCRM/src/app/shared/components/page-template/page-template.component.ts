import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit {

  @Input() buttonName : string;

  @Output() displayClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteClicked : EventEmitter<boolean> = new EventEmitter<boolean>();

  public displayCardSlide : boolean = false;

  constructor(public authService : AuthService ) { }

  ngOnInit(): void {
  }

  /* Output methods */

  public display() : void {
    this.slideCard();
    this.displayClicked.emit();
  }

  public edit() : void {
    this.slideCard();
    this.editClicked.emit();
  }

  public delete() : void {
    this.deleteClicked.emit();
  }

  /* CardSlide method display */

  public slideCard() : void {
    this.displayCardSlide = !this.displayCardSlide;
  }
}
