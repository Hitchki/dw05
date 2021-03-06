import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { test2 } from '../../testing/data/test2';
import { prototext } from '../../testing/data/prototext/prototext';

@Component({
  selector: 'cpf-angular-fire-object',
  templateUrl: './angular-fire-object.component.html',
  styleUrls: ['./angular-fire-object.component.css']
})
export class AngularFireObjectComponent implements OnInit {
  items: FirebaseObjectObservable<any>;
  // af: AngularFire;

  private message: string;
  private data: any;

  constructor(private af: AngularFire) {
    // this.items = af.database.object('/test4/projects');
  }

  ngOnInit() {
  }

  save1() {
    // data = [{normtext: 'abcd'}, {normtext: 'abcd1'}];
    this.data = prototext;

    const rest = this.af.database.object('/prototext').set(this.data);

    rest.then(() => this.message = `Hat funktioniert`)
      .catch((er) => this.message = `Fehler ${er}`);

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
