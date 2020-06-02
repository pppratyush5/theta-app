import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theta';
  menuSelected = '';

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  // to toggle between employee list and add employee component
  menuItem(item: string) {
    this.menuSelected = item;
  }

  // implementing LazyLoading for employee list
  async load() {
    this.vcr.clear();
    const { EmployeeListComponent } = await import('./employee-list/employee-list.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(EmployeeListComponent));
  }

}
