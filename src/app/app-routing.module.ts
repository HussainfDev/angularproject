import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './products/productlist.component';
import{HttpClientModule} from '@angular/common/http';



const routes: Routes = [{path:"productlist",component:ProductlistComponent}];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
