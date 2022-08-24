import { Component } from "@angular/core";

@Component({
  selector: "app-helloAdmin",
  template: `
    <h2>Hello there!</h2>
    <hr>
    <span>Enter Name: </span>
    <input type="text" [ngModel]="user.name" />
    <button (click)="rename(user.name)">Change</button>
    <!-- Interpolation -->
    <h3>ID: {{user.id}} </h3>
    <h4 [style]="nameStyle">Name: {{user.name}}</h4> <!-- Style Binding -->
    <p>{{user.name}}'s age: {{ user.age }}</p>
    <span>Password: </span>
    <!-- Property Binding -->
    <input type="text" placeholder="Enter password" [value]="user.pass" />
    <br>
    <span>Confirm Password: </span>
    <!-- Two-way Binding -->
    <input type="text" [(ngModel)]="user.pass" />
    <br>
    <!-- Event Binding -->
    <button (click)="submitButton()">Submit</button>
    <!-- ng-template -->
    <div *ngIf="user.pass.length >= 6; else noPass">
      Pass nhiều hơn 6 kí tự
    </div>
    <ng-template #noPass>
      <div>
        Pass yếu ({{user.pass.length}} kí tự, yêu cầu >= 6)
      </div>
    </ng-template>
    <hr>
  `,
})
export class HelloAdminComponent {
  user = {
    id : 0,
    name: "Admin",
    age: 100,
    pass: "admin",
  }

  // @Input() changeName: string; ???

  submitButton() {
    alert("Success!");
  }

  rename(str : string){
    this.user.name = str;
  }

  //Style Binding
  nameStyle = 'font-size: high; color: blue';
}