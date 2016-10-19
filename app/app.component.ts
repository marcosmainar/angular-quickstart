import { Component } from '@angular/core';
//import { HTTP_PROVIDERS } from '@angular/http';
import { Routes} from '@angular/router';
// import 'rxjs/Rx'; // load the full rxjs

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    showHeading = true;
    title = 'Tour of Heroes';

    toggleHeading() {
        this.showHeading = !this.showHeading;
    }
}