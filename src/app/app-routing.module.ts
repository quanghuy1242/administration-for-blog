import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCrudComponent } from './post-crud/post-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
	{ path: 'post', component: PostCrudComponent },
	{ path: 'post/:id/edit', component: PostDetailComponent },
	{ path: 'configuration', component: ConfigurationComponent },
	{ path: 'projects', component: ProjectsManagementComponent },
	{ path: 'accounts', component: AccountManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
