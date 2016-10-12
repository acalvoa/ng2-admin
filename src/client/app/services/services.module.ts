import { NgModule } from '@angular/core';
import { UserService } from './index';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule],
  declarations: [],
  providers: [UserService],
  exports:[]
})

export class ServicesModule {

}
