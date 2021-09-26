import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postData: any;
  @Output() onRemove = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  btnClick() {
    this.onRemove.emit(this.postData.id);
  }
  btnEdit(): void {
    this.onUpdate.emit(this.postData);
  }
}
