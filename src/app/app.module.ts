import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { PostCrudComponent } from './post-crud/post-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { DialogPreviewComponent } from './dialog-preview/dialog-preview.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostListComponent,
    HeaderComponent,
    PostCrudComponent,
    DashboardComponent,
    ConfigurationComponent,
    AccountManagementComponent,
    ProjectsManagementComponent,
    PostDetailComponent,
    DialogPreviewComponent,
    SafeHTMLPipe,
    DialogAlertComponent,
    DialogConfirmComponent
  ],
  entryComponents: [
    DialogPreviewComponent,
    DialogConfirmComponent,
    DialogAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MaterialModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
