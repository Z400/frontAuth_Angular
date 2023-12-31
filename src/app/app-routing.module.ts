import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {   //LeazyLoading
    path: '', loadChildren: () => 
    import('./core/components/auth/auth.module').then( m=> m.AuthModule)
  },

  {
  path: 'admin', loadChildren: () =>
   import('./components/admin/admin.module').then(m => m.AdminModule)
  }


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
