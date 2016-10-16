import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [UsersComponent],
    exports: [UsersComponent],
    providers: [UserService]
})

export class UsersModule { }
