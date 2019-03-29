import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatCardModule,
  MatMenuModule,
  MatBadgeModule,
  MatGridListModule,
  MatRippleModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    MatGridListModule,
    MatRippleModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class MaterialModule {}