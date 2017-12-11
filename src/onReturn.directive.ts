import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[onReturn]'
})
export class OnReturnDirective {
    private el: ElementRef;
    @Input() onReturn: any;

    constructor(private _el: ElementRef) {
        this.el = this._el;
    }

    @HostListener('keydown', ['$event']) onKeyDown(e) {
        if ((e.which === 13 || e.keyCode === 13)) {
            e.preventDefault();
            if (this.onReturn instanceof Array) {
                let termine = false;
                let i = 0;
                while (!termine && i < this.onReturn.length) {
                    const element = this.onReturn[i];
                    if (element) {
                        if (element instanceof HTMLInputElement ||
                            element instanceof HTMLButtonElement ||
                            element instanceof HTMLSelectElement ||
                            element instanceof HTMLSelectElement) {
                            if (!element.disabled) {
                                element.focus(); termine = true;
                            };
                        } else {
                            if (element && element.nativeElement instanceof HTMLInputElement ||
                                element.nativeElement instanceof HTMLButtonElement ||
                                element.nativeElement instanceof HTMLSelectElement) {
                                if (!element.nativeElement.disabled) {
                                    element.nativeElement.focus(); termine = true;
                                }
                            } else {
                                let input = element['ctrInput'];
                                if (input) {
                                    input = input['nativeElement'];
                                    if (input && input instanceof HTMLInputElement) {
                                        if (!input.disabled) { input.focus(); termine = true; };
                                    }
                                }
                            }
                        }
                    }
                    i++;
                }
            } else if (this.onReturn) {
                const element = this.onReturn;
                if (element instanceof HTMLInputElement || element instanceof HTMLButtonElement || element instanceof HTMLSelectElement) {
                    if (!element.disabled) { element.focus(); return false; };
                } else {
                    let input = element['ctrInput'];
                    if (input) {
                        input = input['nativeElement'];
                        if (input && input instanceof HTMLInputElement) {
                            if (!input.disabled) { input.focus(); return false; };
                        }
                    }
                }
            } else {
                console.log('close keyboard');
            }
            return;
        }

    }
}
