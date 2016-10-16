import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




import { BSComponentComponent } from './bsComponent.component';

@NgModule({
    imports: [
    	RouterModule,
    	FormsModule,
		CommonModule
	],
    declarations: [BSComponentComponent],
    exports: [BSComponentComponent]
})

export class BSComponentModule { }
