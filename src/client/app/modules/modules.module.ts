import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [CommonModule,LoginModule,SignupModule,DashboardModule],
    declarations: [],
    exports: []
})

export class ModulesModule { }
