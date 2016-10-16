import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeysPipe } from '../../pipes/index';
/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule,FormsModule, NgbModule.forRoot()],
    declarations: [DatatableComponent,KeysPipe],
    exports: [CommonModule, FormsModule,DatatableComponent]
})
export class DatatableModule {
}
