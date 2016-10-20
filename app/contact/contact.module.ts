import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports:      [ ContactRoutingModule, SharedModule ],
  declarations: [ ContactComponent ],
  exports:      [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
