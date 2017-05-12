import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {MenuComponent} from 'app/menu/menu.component';
import {MenuService} from 'app/services/menu.service';
import {By} from '@angular/platform-browser';

describe('CardListComponent', () => {
  let fixture: ComponentFixture<MenuComponent>, comp: MenuComponent,
    debugElement: DebugElement, element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataTableModule, DialogModule, NoopAnimationsModule],
      declarations: [MenuComponent],
      providers: [
        {
          provide: MenuService, useValue: {
          get() {
            return Observable.of([
              {
                code: 'sw1', category: 'Sandwiches & Wraps', name: 'Hot Rotisserie Beef Sandwich',
                description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
                price: 111
              },
              {
                code: 'sw2', category: 'Sandwiches & Wraps', name: 'Rotisserie Beef Kaiser',
                description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
                price: 22

              }
            ]);
          }
        }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    comp = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should get menu items from MenuComponent', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(comp.items.length).toBe(2);
    });
  }));

  it('should display grid', async(() => {
    fixture.detectChanges();

    expect(debugElement.queryAll(By.css('.menu-table')).length).toEqual(1);
  }));

  it('should display data in table', async(() => {
    fixture.detectChanges();
    const cells = debugElement.queryAll(By.css('tr.ui-widget-content'));

    expect(cells.length).toBe(2);
  }));

  it('should call showDetails on row click', async(() => {
    const spy = spyOn(comp, 'showDetails');
    fixture.detectChanges();

    const cell = debugElement.queryAll(By.css('.ui-datatable-odd .ui-cell-data'))[0];
    cell.nativeElement.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));
});
