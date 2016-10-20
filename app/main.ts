// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Compile (JIT) and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);