# neo-directives
Command pattern for Angular

## Installation

To install this library, run:

```bash
$ npm install neo-directives --save
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

    // Specify library as an import for default config
    NeoDirectivesModule.forRoot(null)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library imported, you can use its directives in your Angular application

## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
