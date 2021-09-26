import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  @Input() postData: any;
  @Output() onUpdateChild = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {}
  clearFormData() {
    this.postData = [];
  }

  update(): void {
    const data = {
      id: this.postData.id,
      title: this.postData.title,
      imgUrl: this.postData.imgUrl,
      catename: this.postData.catename,
      shortDesc: this.postData.shortDesc,
    };
    this.onUpdateChild.emit(data);
    this.clearFormData();
  }
}
