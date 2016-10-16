import { NgModule } from '@angular/core';

import { LugaresComponent } from './lugares.component';
import { UserService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [LugaresComponent],
    exports: [LugaresComponent],
    providers: [UserService]
})

export class LugaresModule { }
