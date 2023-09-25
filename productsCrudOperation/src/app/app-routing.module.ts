import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponentComponent } from './update-component/update-component.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "product", component: AddProductComponent},
  {path: "updateProduct/:id", component: UpdateComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
