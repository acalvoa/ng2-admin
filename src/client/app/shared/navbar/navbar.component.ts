import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
	private user:UserService; 
	private router:Router;
	@Output() toggleSidebar:EventEmitter<any> = new EventEmitter();	

	constructor(user:UserService, router:Router){
		this.router = router;
		this.user = user;
	}
	//FUNCION PARA ESCONDER EL SIDEBAR
	sidebar(evt:any){
		this.toggleSidebar.next(evt);
	}
	//FUNCION PARA PROVOCAR EL LOGOUT
	logout() {
		this.user.logout()
		.subscribe(
		    data => {
		    	//se puede efectuar error handler
		    	this.router.navigateByUrl('/login');
		    },
		    err => console.error(err)
		);
	}
}
