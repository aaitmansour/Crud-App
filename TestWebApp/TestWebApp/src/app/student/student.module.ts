import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class student {
          StudentID : string | undefined;
          CollegeName : string | undefined ;
          ContactName : string | undefined;
          ContactTitle!: string;
          Address! :string;
          City! :string;
          Region! : string;
          PostalCode! : string;
          Country! : string;
          Phone! : string;
 }
