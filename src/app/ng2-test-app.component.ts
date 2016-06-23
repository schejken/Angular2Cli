import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng2-test-app-app',
  templateUrl: 'ng2-test-app.component.html',
  styleUrls: ['ng2-test-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  
])
export class Ng2TestAppAppComponent {
  title = 'ng2-test-app works2!';
}
