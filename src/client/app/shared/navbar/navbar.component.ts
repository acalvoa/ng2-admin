import { Component, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
	@Output()
	toggleSidebar:EventEmitter<any> = new EventEmitter();
	private user:any;
	private user_service:UserService;
	private router:Router;
	constructor(user:UserService, router:Router) {
		this.router = router;
		this.user_service = user;
		this.user = this.user_service.getUser();
	}
	//FUNCION PARA ESCONDER EL SIDEBAR
	sidebar(evt:any) {
		this.toggleSidebar.next(evt);
	}
	//FUNCION PARA PROVOCAR EL LOGOUT
	logout() {
		this.user_service.logout()
		.subscribe(
		    data => {
		    	//se puede efectuar error handler
		    	this.router.navigateByUrl('/login');
		    },
		    err => console.error(err)
		);
	}
}
