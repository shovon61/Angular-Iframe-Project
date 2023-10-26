import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
      { path:'',component:FirstComponent},
      { path:'test',component:TestComponent},
      { path:'view',component:ViewComponent},
      { path:'first',component:FirstComponent},
      { path:'**',component:NotFoundComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
