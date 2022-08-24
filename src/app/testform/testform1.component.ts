import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testform1',
  templateUrl: './testform1.component.html',
  styles: [''],
})
export class Testform1Component implements OnInit {
  @Input() name!: string;
  @Input() password: string = 'password';
  @Output() newNoteEvent = new EventEmitter<string>();

  addNewNote(value: string): void {
    this.newNoteEvent.emit(value);
  }

  count = -2;

  constructor() {
    console.log('Tab 1: Component create!');
  }

  ngDoCheck() {
    this.count++;
    console.log('Tab 1: Changed!');
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    console.log('Tab 1: Component destroy ...');
    console.log('Tab 1: Bye!');
  }

  onSubmit() {
    alert(this.name + "'s new password is: " + this.password);
  }
}
