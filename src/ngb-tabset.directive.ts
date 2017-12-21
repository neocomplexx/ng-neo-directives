import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { NeoModalService } from 'ng-neo-modal';
import { ITabChangeController } from './controllers/i-tab-change-controller';

/**
 * @author jcangelosi
 */
@Directive({
    selector: '[tabSelectedIdNueva], [tabChangeController]',
})
export class NgbTabSetNuevaDirective implements OnInit, OnDestroy {
    protected el: NgbTabset;
    protected tabSelectedIdSubscribe: Subscription;

    @Input() tabSelectedIdNueva: BehaviorSubject<string>;

    @Input() tabChangeController: ITabChangeController;

    protected onTabChanging: boolean;

    constructor(protected _el: NgbTabset, protected neoModalService: NeoModalService) {
        this.el = this._el;
        this.onTabChanging = false;
    }

    ngOnInit() {
        if (this.tabSelectedIdNueva) {
            this.tabSelectedIdSubscribe = this.tabSelectedIdNueva.subscribe((tabSelectedId) => {
                if (tabSelectedId.length > 0) {
                    const tabs = this.el as NgbTabset;
                    const previousValue = this.tabSelectedIdNueva.value;
                    if (tabs.activeId !== tabSelectedId) {
                        tabs.select(tabSelectedId);
                    }
                }
            });
        }
    }

    ngOnDestroy() {
        if (this.tabSelectedIdSubscribe) { this.tabSelectedIdSubscribe.unsubscribe(); }
    }


    @HostListener('tabChange', ['$event']) async onTabChange($event: any) {
        if (this.onTabChanging) {
            return;
        }
        this.onTabChanging = true;
        if (this.tabChangeController) {
            $event.preventDefault();
            if (await this.tabChangeController.canChangeTab()) {
                this.cambiarTab($event, true);
            }
        } else {
            this.cambiarTab($event);
        }
        this.onTabChanging = false;
    }

    private cambiarTab($event: any, force: boolean = false) {
        const tabSelecting = $event.nextId;
        if (force || this.tabSelectedIdNueva.value !== tabSelecting) {
            this.tabSelectedIdNueva.next(tabSelecting);
        }
    }

}
