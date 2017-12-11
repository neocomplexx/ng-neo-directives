import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[maxLength]'
})
export class StringsDirective {
    private el: ElementRef;
    @Input() maxLength: any;

    constructor(private _el: ElementRef) {
        this.el = this._el;
    }

    @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
        if (e.key === 'Delete' || e.key === 'Tab' || e.key === 'Backspace' || e.key === 'ArrowLeft' ||
            e.altKey || e.ctrlKey || e.key === 'Home' || e.key === 'End' || e.key === 'PageDown' || e.key === 'PageUp' ||
            e.key === 'ArrowRight' || e.key === 'Control' || e.key === 'Alt'  || e.key === 'Shift') { return; }

        const element = this._el.nativeElement.value;
        if (element && element.length >= this.maxLength) {
            e.preventDefault();
        }
    }
}
