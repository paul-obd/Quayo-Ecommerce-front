import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.css']
})
export class DialogComponent implements OnInit {

  @Input() description: string;
  @Input() action_false: string;
  @Input() action_true: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.assignValues();
  }

  assignValues(){
    this.description = this.data.description
    this.action_false = this.data.action_false
    this.action_true =this.data.action_true
  }

}
