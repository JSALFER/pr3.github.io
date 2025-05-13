import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule
  ], 
  exports: [
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
