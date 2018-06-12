import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandDirective, provideConfig } from './ng2-command/command.directive';
import { CommandOptions, COMMAND_CONFIG } from './ng2-command/command.directive';
import { OnReturnDirective } from './onReturn.directive';
import { StringsDirective } from './strings.directive';
import { NumbersDirective } from './numbers.directive';
import { NgbTabSetDirective } from './ngb-tabset.directive';
import { ITabChangeController } from './controllers/i-tab-change-controller';
import { NeoAutofocusDirective } from './neo-autofocus.directive';

export * from './ng2-command/command.directive';
export * from './onReturn.directive';
export * from './strings.directive';
export * from './numbers.directive';
export * from './ngb-tabset.directive';
export * from './controllers/i-tab-change-controller';
export * from './neo-autofocus.directive'


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
    NeoAutofocusDirective
  ],
  exports: [
    CommandDirective,
    OnReturnDirective,
    StringsDirective,
    NumbersDirective,
    NgbTabSetDirective,
    NeoAutofocusDirective
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

