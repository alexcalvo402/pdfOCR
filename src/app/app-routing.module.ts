import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { FormularisComponent } from './pages/formularis/formularis.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "/formularis", component: FormularisComponent },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
