import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { HeaderService } from './header.service';
import { NeoModalService } from 'ng-neo-modal';
import { AlertButton } from 'ng-neo-modal';
import { NgbTabSetDirective } from './ngb-tabset.directive';

@Directive({
    selector: '[tabSelectedId], [notifyWhenTabChanged]',
})
export class NgbTabSetModifyDirective extends NgbTabSetDirective {

    @Input() notifyWhenTabChanged: boolean;

    constructor(protected _el: NgbTabset, protected headerService: HeaderService, protected neoModalService: NeoModalService) {
        super(_el, neoModalService);
        this.notifyWhenTabChanged = false;
    }


    @HostListener('tabChange', ['$event']) async onTabChange($event: any) {
        if (this.notifyWhenTabChanged) {
            if (this.headerService.changed.value) {
                $event.preventDefault();
                const result = await this.neoModalService.decision('Hay cambios sin guardar, esta seguro de salir y perderlos?', '', 'Ahora podrá guardarlos...');
                if (result.ButtonResponse === AlertButton.Accept) {
                    this.headerService.destroyComponent();
                    this.cambiarTab($event, true);
                }
            }
        } else {
           this.cambiarTab($event);
        }
    }

    private cambiarTab($event: any, force: boolean = false) {
        const tabSelecting = $event.nextId;
        if (force || this.tabSelectedId.value !== tabSelecting) {
            this.tabSelectedId.next(tabSelecting)
        }
    }
}
