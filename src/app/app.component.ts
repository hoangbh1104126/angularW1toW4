import {
  AfterViewInit,
  Component,
  QueryList,
  VERSION,
  ViewChildren,
} from '@angular/core';
import { Testform1Component } from './testform/testform1.component';
import { Testform2Component } from './testform/testform2.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  money1 = '12345 USD';
  money2 = '1 VND';
  day = new Date();

  showTab = true;

  title: string = 'angular100days';
  name: string = 'Admin';

  notes = ['First note: Hello world!'];

  addNote1(newNote: string) {
    this.notes.push(newNote);
  }

  deleteNote1() {
    this.notes.pop();
  }

  @ViewChildren(Testform2Component) testForm!: QueryList<any>;

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.testForm.forEach((testForm) => console.log(testForm));
  }

  num: number = 1;

  GetPass(password: string): void {
    alert('Your password is: ' + password);
    alert('Bye!');
  }

  note = ['First note: Hello world!'];

  addNote2(newNote: string) {
    this.note.push(newNote);
    this.num++;
  }

  deleteNote2(delNote: string) {
    let check: number = 0;
    const index = this.note.indexOf(delNote);
    if (index !== -1) {
      this.note.splice(index, 1);
      console.log('Remove note success!');
    }
    this.num--;
  }
}
