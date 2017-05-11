import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {CardListComponent} from './card-list.component';
import {CardContentDirective, CardDirective} from 'app/card-list/card.component';

@Component({
  selector: 'test',
  template: `
    <app-card-list>
      <app-card header="my test" side="my side">
        <ng-template appCardContent>
          test content
        </ng-template>
      </app-card>
  `
})
export class TestComponent {
}

describe('CardListComponent', () => {
  let fixture: ComponentFixture<TestComponent>, comp: TestComponent,
    debugElement: DebugElement, element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CardListComponent, CardContentDirective, CardDirective]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should render header', () => {
    fixture.detectChanges();
    const h2 = debugElement.query(By.css('.col-md-9 > h2'));
    expect(h2.nativeElement.textContent).toEqual('my test');
  });

  it('should render side', () => {
    fixture.detectChanges();
    const h2 = debugElement.query(By.css('.col-md-3 > h2'));
    expect(h2.nativeElement.textContent).toEqual('my side');
  });

});
