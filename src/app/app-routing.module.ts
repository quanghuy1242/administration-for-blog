import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCrudComponent } from './post-crud/post-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostNewComponent } from './post-new/post-new.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'post', component: PostCrudComponent, canActivate: [AuthGuard] },
	{ path: 'post/:id/edit', component: PostDetailComponent, canActivate: [AuthGuard] },
	{ path: 'post/new', component: PostNewComponent, canActivate: [AuthGuard] },
	{ path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard] },
	{ path: 'projects', component: ProjectsManagementComponent, canActivate: [AuthGuard] },
	{ path: 'accounts', component: AccountManagementComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
