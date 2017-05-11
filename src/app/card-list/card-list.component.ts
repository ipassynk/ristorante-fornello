import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';

import {CardDirective} from 'app/card-list/card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @ContentChildren(CardDirective) cards: QueryList<CardDirective>;

  constructor() {
  }

  ngOnInit() {
  }

}
