import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFire } from 'angularfire2';

@Component({
  selector: 'cpf-angular-fire',
  templateUrl: './angular-fire.component.html',
  styleUrls: ['./angular-fire.component.css']
})
export class AngularFireComponent implements OnInit {

  afList$: any;
  afObj$: any;

  obj: any;

  constructor(
    private db: AngularFireDatabase,
    private af: AngularFire,
  ) { }

  ngOnInit() {
  }

  listbinding() {
    // alert('Listbinding clicked');
    debugger;
    this.afList$ = this.af.database.list('/playground/list');
    this.afList$.push( { testwert: 'testwert' });
    this.afList$.push( { testwert1: 'testwert1' });

    this.afList$
  }

  objectbinding() {
    // alert('Listbinding clicked');
    debugger;
    this.afObj$ = this.af.database.object('/playground/object');
    this.afObj$.set( '42' );
    // this.afObj$.set( { testwert: 'testwert' });

    // this.afObj$.object('testwert').set('27');
  }

}
