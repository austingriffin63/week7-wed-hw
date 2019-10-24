import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrowComponent } from './fun-facts/arrow/arrow.component';
import { CreationComponent } from './creation/creation.component';
import { LetComponent } from './let/let.component'
import { VarComponent } from './var/var.component'
import { DefComponent } from './def/def.component'
import { ReverseComponent } from './reverse/reverse.component'
import { CallbackComponent } from './callback/callback.component'
import { CallComponent } from './call/call.component';
import { ArrayComponent } from './array/array.component';


const routes: Routes = [
  {
    path: 'arrow', component: ArrowComponent
  },
  {
    path: 'creation', component: CreationComponent
  },
  {
    path: 'let', component: LetComponent
  },
  {
    path: 'var', component: VarComponent
  },
  {
    path: 'def', component: DefComponent
  },
  {
    path: 'reverse', component: ReverseComponent
  },
  {
    path: 'callback', component: CallbackComponent
  },
  {
    path: 'call', component: CallComponent
  },
  {
    path: 'array', component: ArrayComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
