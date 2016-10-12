import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeModule } from './examples/home/home.module';
// import { ChartModule } from './examples/charts/chart.module';
// import { BlankPageModule } from './blank-page/blankPage.module';
// import { TableModule } from './examples/tables/table.module';
// import { FormModule } from './examples/forms/forms.module';
// import { GridModule } from './examples/grid/grid.module';
// import { BSComponentModule } from './examples/bs-component/bsComponent.module';
// import { BSElementModule } from './examples/bs-element/bsElement.module';

import { DashboardComponent } from './dashboard.component';

import {NavbarComponent} from '../../shared/index';
import {SidebarComponent} from '../../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
     //    ChartModule,
     //    TableModule,
     //    FormModule,
     //    GridModule,
    	// BSComponentModule,
     //    BSElementModule,
     //    BlankPageModule
    ],
    declarations: [DashboardComponent, NavbarComponent, SidebarComponent],
    exports: [DashboardComponent, NavbarComponent, SidebarComponent]
})

export class DashboardModule { }
