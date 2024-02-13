import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './pipes/highlight.directive';
import { CopyrightDirective } from './pipes/copyright.directive';
import { NumericDirective } from './pipes/numeric.directive';
import { PermissionDirective } from './pipes/permission.directive';
import { AutofocusDirective } from './pipes/autofocus.directive';


@NgModule({
  declarations: [
    CopyrightDirective,
    HighlightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    CommonModule,
    AutofocusDirective
  ],
  exports: [
    CopyrightDirective,
    HighlightDirective,
    NumericDirective,
    PermissionDirective
  ],
})
export class SharedModule { }
