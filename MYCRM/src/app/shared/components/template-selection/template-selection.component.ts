import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.scss']
})
export class TemplateSelectionComponent implements OnInit {

  @Input() selection: string[];
  @Input() valueSelected: string;
  @Output() clickedItemSelection: EventEmitter<string> = new EventEmitter<string>();

  public formStatus : FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public select(){
    this.formStatus.get('status').valueChanges.pipe().subscribe(value => { this.clickedItemSelection.emit(value)});
  }

  public buildForm(): void{
    this.formStatus = this.formBuilder.group({
      status : [this.valueSelected]
    });
  }

}
