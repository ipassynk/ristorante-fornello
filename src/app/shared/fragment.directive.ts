import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[fragment]'
})
export class FragmentDirective implements OnInit, OnDestroy {
  @Input() fragment: string;
  private fragmentRouteSubscription: Subscription;

  constructor(private route: ActivatedRoute, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.fragmentRouteSubscription = this.route.fragment.subscribe(f => {
      if (this.fragment === f) {
        this.scrollToFragment(f);
      }
    });
  }

  ngOnDestroy() {
    if (this.fragmentRouteSubscription) {
      this.fragmentRouteSubscription.unsubscribe();
    }
  }

  private scrollToFragment(fragment: string) {
    setTimeout(() => {
      this.elementRef.nativeElement.scrollIntoView();
    });
  }
}
