import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalConstant } from './globalConstants/global-contant';

@NgModule({
  declarations: [
    LoaderComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    GlobalConstant
  ],
  exports: [
    LoaderComponent
  ]
})
export class CoreModule { 
  static setLocale(locale: string): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    }
  }
}
