import { NgModule } from '@angular/core';
import { UserService } from './index';
import { GuardService } from './user/guard.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule],
  declarations: [],
  providers: [GuardService,UserService],
  exports:[]
})

export class ServicesModule {
}
