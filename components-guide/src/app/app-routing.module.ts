import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'productlist', component: ProductListComponent },
  { path: 'parentchild', component: ParentComponentComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: '**', redirectTo: 'productlist' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
