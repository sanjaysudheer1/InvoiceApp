import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routesConstants } from './routes_constants';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: routesConstants.ITEMS_LIST, loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
  },
  {
    path: routesConstants.USER_LIST, loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
