import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'cpf-angular-fire-list',
  templateUrl: './angular-fire-list.component.html',
  styleUrls: ['./angular-fire-list.component.css']
})
export class AngularFireListComponent implements OnInit {
  items: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/test4/projects');
  }

  ngOnInit() {
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
}



/*
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
      <input type="text" #updatetext [value]="item.text" />
      <button (click)="updateItem(item.$key, updatetext.value)">Update</button>
      <button (click)="deleteItem(item.$key)">Delete</button>
    </li>
  </ul>
  <input type="text" #newitem />
  <button (click)="addItem(newitem.value)">Add</button>
  <button (click)="deleteEverything()">Delete All</button>
  `,
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/messages');
  }
  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
}*/
