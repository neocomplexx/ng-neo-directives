import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { NeoModalService } from 'ng-neo-modal';

@Directive({
    selector: '[tabSelectedId]',
})
export class NgbTabSetDirective implements OnInit, OnDestroy {
    protected el: NgbTabset;
    protected tabSelectedIdSubscribe: Subscription;

    @Input() tabSelectedId: BehaviorSubject<string>;

    constructor(protected _el: NgbTabset, protected neoModalService: NeoModalService) {
        this.el = this._el;
    }

    ngOnInit() {
        if (this.tabSelectedId) {
            this.tabSelectedIdSubscribe = this.tabSelectedId.subscribe((tabSelectedId) => {
                if (tabSelectedId.length > 0) {
                    const tabs = this.el as NgbTabset;
                    const previousValue = this.tabSelectedId.value;
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
        const tabSelecting = $event.nextId;
        if (this.tabSelectedId.value !== tabSelecting) {
            this.tabSelectedId.next(tabSelecting)
        }
    }
}
