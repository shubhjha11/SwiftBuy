import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSliderModule } from "@angular/material/slider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule, MatOptionModule, MAT_RIPPLE_GLOBAL_OPTIONS } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTreeModule } from "@angular/material/tree";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatStepperModule } from "@angular/material/stepper";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
@NgModule({
  declarations: [],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } }
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSliderModule, 
    MatAutocompleteModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatOptionModule,
    MatGridListModule, 
    MatTabsModule, 
    MatSnackBarModule, 
    MatExpansionModule, 
    MatProgressBarModule, 
    MatSlideToggleModule, 
    MatStepperModule,
    MatMenuModule,
    MatChipsModule,
    MatTreeModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatSliderModule, 
    MatAutocompleteModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatOptionModule,
    MatGridListModule, 
    MatTabsModule, 
    MatSnackBarModule, 
    MatExpansionModule, 
    MatProgressBarModule, 
    MatSlideToggleModule, 
    MatStepperModule,
    MatMenuModule,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule,
    MatButtonToggleModule
  ],
})
export class MaterialModule { }
