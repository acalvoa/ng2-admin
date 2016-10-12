import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserService } from '../../services/index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LoginComponent],
    providers: [UserService],
    exports: [LoginComponent]
})

export class LoginModule { }
