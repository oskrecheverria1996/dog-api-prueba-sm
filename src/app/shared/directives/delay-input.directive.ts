import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounce, fromEvent, Subject, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[appDelayInput]'
})
export class DelayInputDirective implements OnInit, OnDestroy {

  @Input() delayTime: number = 500;
  @Output() delayedInput = new EventEmitter<Event>();
  
  private destroy$ = new Subject<void>();

  constructor(private elementRef: ElementRef<HTMLInputElement>) { }

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, 'input')
    .pipe(
      debounce(() => timer(this.delayTime)),
      takeUntil(this.destroy$),
    )
    .subscribe(e => this.delayedInput.emit(e));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}