import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCrudComponent } from './post-crud/post-crud.component'

const routes: Routes = [
	{ path: 'post', component: PostCrudComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
