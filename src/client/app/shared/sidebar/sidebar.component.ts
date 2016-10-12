import { Component, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {
	@Input() isActive:boolean;
	showMenu: string = '';
	// eventCalled() {
	// 	this.isActive = !this.isActive;
	// }
	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
