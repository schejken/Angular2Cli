import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MyNewComponentComponent } from './my-new-component.component';

describe('Component: MyNewComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MyNewComponentComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MyNewComponentComponent],
      (component: MyNewComponentComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MyNewComponentComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MyNewComponentComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-new-component></app-my-new-component>
  `,
  directives: [MyNewComponentComponent]
})
class MyNewComponentComponentTestController {
}

