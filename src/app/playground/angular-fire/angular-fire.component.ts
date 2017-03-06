import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFire } from 'angularfire2';

@Component({
  selector: 'cpf-angular-fire',
  templateUrl: './angular-fire.component.html',
  styleUrls: ['./angular-fire.component.css']
})
export class AngularFireComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private af: AngularFire,
  ) { }

  ngOnInit() {
  }

  listbinding() {
    alert('Listbinding clicked');
  }

}
