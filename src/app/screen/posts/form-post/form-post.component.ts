import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent implements OnInit {
  @Output() onSave = new EventEmitter<any>();

  formObject = {
    id: 0,
    title: '',
    imgUrl: '',
    catename: '',
    shortDesc: '',
  };
  constructor() {}

  ngOnInit(): void {}

  saveForm() {
    console.log(this.formObject);
    this.onSave.emit(this.formObject);
    this.clearFormData();
  }
  clearFormData() {
    this.formObject = {
      id: 0,
      title: '',
      imgUrl: '',
      catename: '',
      shortDesc: '',
    };
  }
}
