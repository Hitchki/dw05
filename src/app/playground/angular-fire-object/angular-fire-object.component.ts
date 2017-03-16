import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'

@Component({
  selector: 'cpf-angular-fire-object',
  templateUrl: './angular-fire-object.component.html',
  styleUrls: ['./angular-fire-object.component.css']
})
export class AngularFireObjectComponent implements OnInit {
  items: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.items = af.database.object('/test4/projects');
  }

  ngOnInit() {
  }

  // addItem(newName: string) {
  //   this.items.push({ text: newName });
  // }
  // updateItem(key: string, newText: string) {
  //   this.items.update(key, { text: newText });
  // }
  // deleteItem(key: string) {
  //   this.items.remove(key);
  // }
  // deleteEverything() {
  //   this.items.remove();
  // }
}
