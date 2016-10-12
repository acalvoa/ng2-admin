import { Component } from '@angular/core';
import { UserService } from '../../services/index';
/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html'
})

export class LoginComponent { 
	private user:UserService;
	constructor(user:UserService){
		this.user = user;
	}
}
