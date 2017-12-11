# neo-directives
Command pattern for Angular

## Installation

To install this library, run:

```bash
$ npm install ng-neo-directives --save
```


and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { NeoDirectivesModule } from 'neo-directives';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import for default config in app.module
    NeoDirectivesModule.forRoot(null)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Import library in child modules in order to use directives
import { NeoDirectivesModule } from 'neo-directives';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NeoDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ChildModule { }
```



## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
