import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  public searchForm: FormGroup;
  private router: Router;
  @Input() title: string;
  @Input() message: string;
  @Input() tabFilters: string[];
  @Input() searchFilter: string;

  @Output() clickedAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickedFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickedSearchTerm: EventEmitter<string> = new EventEmitter<string>();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void{
    this.searchForm = this.formBuilder.group({
      search:['']
    });
  }
  public filter(value: string): void {
    this.searchForm.patchValue( {'search':null} );
    this.clickedFilter.emit(value);
  }

  public search(){
    this.searchForm.get('search').valueChanges.pipe().subscribe(data => {
      this.clickedSearchTerm.emit(data)});
  }

  public redirect(){
    this.clickedAdd.emit();
  }


}
