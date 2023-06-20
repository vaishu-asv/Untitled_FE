import { AuthenticationGuard } from './guards/authentication.guard';
import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  providers: [
    AuthenticationGuard
  ],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ,	QuickUiModule,
],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule { }
