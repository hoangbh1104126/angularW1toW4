import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-testform2',
  templateUrl: './testform2.component.html',
  styles: [''],
})
export class Testform2Component implements OnInit {
  @Input() name!: string;
  @Input() password: string = 'password';
  @Input() num: number | string | undefined;

  @Output() newNoteEvent = new EventEmitter<string>();
  @Output() delNoteEvent = new EventEmitter<string>();

  @ViewChildren(Testform2Component) testForm!: QueryList<Testform2Component>;
  @ViewChild('newNote', { read: ElementRef }) newNote!: ElementRef;

  addNewNote(value: string): void {
    if (value !== '') this.newNoteEvent.emit(value);
    this.newNote.nativeElement.value = '';
  }

  count = 0;

  constructor() {
    console.log('Tab 2: Component create!');
  }

  ngDoCheck() {
    this.count++;
    console.log('Tab 2: Changed!');
  }

  ngOnInit(): void {
    //this.testForm.changes.subcribe(console.log);
  }

  ngOnDestroy() {
    console.log('Tab 2: Component destroy ...');
    console.log('Tab 2: Bye!');
  }

  onSubmit(pass: string) {
    let check = false;
    this.password = pass;
    if (this.name === '') {
      alert('Enter your name first!');
      check = true;
    }
    if (this.password === '') {
      alert('Type your pass!');
      check = true;
    }
    if (!check) {
      alert(this.name + "'s new password is: " + this.password);
    }
  }

  printProfile() {
    alert(
      'Your name: ' +
        this.name +
        '\nYour password: ' +
        this.password +
        '\nYou have ' +
        this.num +
        ' note(s)\nBye!'
    );
  }
}
