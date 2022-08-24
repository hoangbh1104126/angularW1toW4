import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `
    <div *ngFor="let user of users">
      <hr>
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
    </div>
  `,
})

export class HelloComponent {
  users = [
    {
      id : 1,
      name: "Bùi",
      age: 30,
      pass: "123456789",
    },
    {
      id : 2,
      name: "Huy",
      age: 15,
      pass: "159357",
    },
    {
      id : 3,
      name: "Hoàng",
      age: 45,
      pass: "12",
    },
  ];

  submitButton() {
    alert("Success!");
  }

  //Style Binding
  nameStyle = 'font-size: medium; color: blue';
}