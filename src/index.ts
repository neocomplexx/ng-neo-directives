import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandDirective } from './ng2-command/command.directive';
import { CommandOptions, COMMAND_DEFAULT_CONFIG, COMMAND_CONFIG } from './ng2-command/command.directive';
import { OnReturnDirective } from './onReturn.directive';
import { StringsDirective } from './strings.directive';
import { NumbersDirective } from './numbers.directive';
import { NgbTabSetDirective } from './ngb-tabset.directive';
import { KeyListenerDirective } from './keyListener.directive';


export * from './ng2-command/command.directive';
export * from './onReturn.directive';
export * from './strings.directive';
export * from './numbers.directive';
export * from './ngb-tabset.directive';

export * from './keyListener.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommandDirective,
    OnReturnDirective,
    StringsDirective,
    NumbersDirective,
    NgbTabSetDirective,
    KeyListenerDirective
  ],
  exports: [
    CommandDirective,
    OnReturnDirective,
    StringsDirective,
    NumbersDirective,
    NgbTabSetDirective,
    KeyListenerDirective
  ]
})
export class NeoDirectivesModule {

	static forRoot(@Optional() config: CommandOptions): ModuleWithProviders {
		return {
			ngModule: NeoDirectivesModule,
			providers: [
        { provide: COMMAND_CONFIG, useValue: provideConfig(config) },
			]
		};
  }
  
  
}

export function provideConfig(config: CommandOptions): any {
  return Object.assign({}, COMMAND_DEFAULT_CONFIG, config);
}

