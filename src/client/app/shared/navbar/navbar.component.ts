import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
	@Output() 
	toggleSidebar:EventEmitter<any> = new EventEmitter();	
	
	changeTheme(color: string): void {
		var link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebar(evt:any){
		this.toggleSidebar.next(evt);
	}
}
