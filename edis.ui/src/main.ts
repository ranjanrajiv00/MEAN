import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// This tells index.html to load AppModule to start the application
platformBrowserDynamic().bootstrapModule(AppModule);