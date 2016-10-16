import { NgModule } from '@angular/core';

import { SedesComponent } from './sedes.component';
import { UserService } from '../../../services/index';
import { RestService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [SedesComponent],
    exports: [SedesComponent],
    providers: [UserService,RestService]
})

export class SedesModule { }
