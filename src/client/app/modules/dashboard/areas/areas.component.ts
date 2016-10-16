import { Component } from '@angular/core';
import { UserService } from '../../../services/index';
import { Ng2TableModule } from 'ng2-table/ng2-table';

@Component({
	moduleId: module.id,
    selector: 'areas-module',
    templateUrl: 'areas.component.html',
    styleUrls: ['areas.component.css'],

})

export class AreasComponent {
	private user:UserService;
	public rows:Array<any> = [];
	public columns:any[] = [{
		name: "Nombre",
		match: "NAME"
	},{
		name: "Apellido",
		match: "LASTNAME"
	},{
		name: "Email",
		match: "EMAIL"
	},{
		name: "Sede",
		match: "SEDE"
	},{
		name: "Area",
		match: "AREA"
	},{
		name: "Rol",
		match: "ROL"
	}];
	public tconfig:any = {
		items: 20,
		paginate: true,
		filtros: true,
		delete: true,
		edit: true
	};
	public datas:any[] = [];
	//PANTALLA
	private action:string = "view";
	//CONSTRUCTOR
	constructor(user:UserService){
		this.user = user;
		this.user.isAdmin();
		this.getuser();
	}
	getuser(){
		this.user.getUsers().subscribe(
		    data => {
		    	console.log(data);
		    	this.datas = data;
		    },
		    err => console.error(err)
		);
	}
}
