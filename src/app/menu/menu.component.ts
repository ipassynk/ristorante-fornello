import {Component, OnInit} from '@angular/core';

import {MenuService} from 'app/services/menu.service';
import {MenuItem} from 'app/model/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: Array<MenuItem>;
  displayItem = null;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.get().subscribe(
      menu => {
        this.items = menu;
      },
      error => console.error(error));
  }

  showDetails({data}) {
    this.displayItem = data;
  }
}
