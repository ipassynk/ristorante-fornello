import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';


@Directive({selector: 'ng-template[appCardContent]'})
export class CardContentDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}

@Directive({selector: 'app-card'})
export class CardDirective {
  @Input() header: string;
  @Input() side: string;

  @ContentChild(CardContentDirective) contentTpl: CardContentDirective;
}


