import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2TestAppAppComponent } from '../app/ng2-test-app.component';

beforeEachProviders(() => [Ng2TestAppAppComponent]);

describe('App: Ng2TestApp', () => {
  it('should create the app',
      inject([Ng2TestAppAppComponent], (app: Ng2TestAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-test-app works!\'',
      inject([Ng2TestAppAppComponent], (app: Ng2TestAppAppComponent) => {
    expect(app.title).toEqual('ng2-test-app works!');
  }));
});
