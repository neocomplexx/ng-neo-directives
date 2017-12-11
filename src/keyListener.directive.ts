import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Directive({
    selector: '[myKeyListener]'
})

export class KeyListenerDirective {
    private el: ElementRef;

    constructor(private router: Router, private _location: Location) {

    }

    ngOnInit() {
        const that = this;
        window.addEventListener('keydown', function(event: KeyboardEvent) {
            that.onKeyDown(event, that);
        }, true);

    }



    private onKeyDown(event: KeyboardEvent, that: KeyListenerDirective, ): void {

         switch (event.code) {
            case 'F1': {
               that.specialKey('/ventanilla')
               break;
            }
            case 'F2': {
                that.specialKey('/procesos')
                break;
            }
            case 'F3': {
                that.specialKey('/reportes')
                break;
            }
            case 'F4': {
                that.specialKey('/facturacion')
                break;
            }
            case 'F6': {
                that.specialKey('/auditoria')
                break;
            }
            case 'Escape': {
                //that.specialKey('/auditoria')
                this._location.back();
                break;
            }
            default: {
                break;
            }
         }

    }

    private specialKey(ruta: String): void {
        this.router.navigate([ruta]);
        event.preventDefault();
    }
/*
    @HostListener('window:keydown', ['$event', 'true']) onKeyDown(event: KeyboardEvent) {
        event.preventDefault();

        switch (event.code) {
            case 'F1': {
               console.log('This is F1');
              // this.router.navigate(['/ventanilla']);
               break;
            }
            case 'F2': {
                console.log('This is F2');
               // this.router.navigate(['/procesos']);
                break;
            }
            case 'F3': {
                console.log('This is F3');
               // this.router.navigate(['/reportes']);
                break;
            }
            case 'F4': {
                console.log('This is F4');
               // this.router.navigate(['/facturacion']);
                break;
            }
            case 'F5': {
                console.log('This is F5');
               // this.router.navigate(['/auditoria']);
                break;
            }
            default: {
               console.log('Everything else');
               break;
            }
         }

      }
*/
}
