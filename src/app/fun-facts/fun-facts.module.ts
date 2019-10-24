import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowComponent } from './arrow/arrow.component';
import { CreationComponent } from '../creation/creation.component';
import { LetComponent } from '../let/let.component';
import { VarComponent } from '../var/var.component';
import { DefComponent } from '../def/def.component';
import { ReverseComponent } from '../reverse/reverse.component';
import { CallbackComponent } from '../callback/callback.component';
import { CallComponent } from '../call/call.component';
import { ArrayComponent } from '../array/array.component';






@NgModule({
  declarations: [ArrowComponent,CreationComponent,LetComponent,VarComponent,DefComponent,ReverseComponent,CallbackComponent,CallComponent,ArrayComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    ArrowComponent,
    CreationComponent,
    LetComponent,
    VarComponent,
    DefComponent,
    ReverseComponent,
    CallbackComponent,
    CallComponent,
    ArrayComponent,
  ]

})
export class FunFactsModule { }
