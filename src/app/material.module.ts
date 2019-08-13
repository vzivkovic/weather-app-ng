import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule, MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
  ],
  exports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
  ]
})
export class MaterialModule {
}
