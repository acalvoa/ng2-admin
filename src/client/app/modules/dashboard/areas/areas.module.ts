import { NgModule } from '@angular/core';

import { AreasComponent } from './areas.component';
import { UserService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [AreasComponent],
    exports: [AreasComponent],
    providers: [UserService]
})

export class AreasModule { }
