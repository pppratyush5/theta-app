import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'employeeList',
    loadChildren: () => import('./employee-list/employee-list.component').then(m => m.EmployeeListComponent)
  },
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
