import { NgModule } from '@angular/core';
import { UserService, LoggedInGuard } from './index';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule],
  declarations: [],
  providers: [UserService, LoggedInGuard],
  exports:[]
})

export class ServicesModule {

}
