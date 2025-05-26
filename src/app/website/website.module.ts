import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
 
@NgModule({
  declarations: [
    LayoutComponent, 
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WebsiteRoutingModule
  ]
})

export class WebsiteModule { }
