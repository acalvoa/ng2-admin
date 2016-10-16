import { Component } from '@angular/core';
import { UserService } from '../../../services/index';
import { RestService } from '../../../services/index';
import { Ng2TableModule } from 'ng2-table/ng2-table';

@Component({
	moduleId: module.id,
    selector: 'sedes-module',
    templateUrl: 'sedes.component.html',
    styleUrls: ['sedes.component.css'],

})

export class SedesComponent {
	private user:UserService;
	private rest:RestService;
	public rows:Array<any> = [];
	public columns:any[] = [{
		name: "Nombre de Sede",
		match: "NOMBRE_SEDE"
	},{
		name: "Dirección de Sede",
		match: "DIRECCION"
	},{
		name: "Numero de Lugares",
		match: "LUGARES"
	},{
		name: "Numeros de Areas",
		match: "AREAS"
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
	//OBJETO DE INGRESO
	private inSede:any = {
		NOMBRE_SEDE: "",
		DIRECCION: ""
	}
	//CONSTRUCTOR
	constructor(user:UserService, rest:RestService){
		this.user = user;
		this.rest = rest;
		this.user.isAdmin();
		this.getSede();
	}
	getSede(){
		this.rest.get('/sedes').subscribe(
		    data => {
		    	this.datas = data.sedes;
		    },
		    err => console.error(err)
		);
	}
	crearSede(event:any){
		event.preventDefault();
		this.rest.post(this.inSede, '/sedes').subscribe(
		    data => {
		    	this.datas.push(data);
		    	this.action = 'view';
		    	this.inSede = {
					NOMBRE_SEDE: "",
					DIRECCION: ""
				};
		    },
		    err => console.error(err)
		);
	}
	borrarSede(obj:any){
		this.rest.delete(obj.ID_SEDE, '/sedes').subscribe(
		    data => {
		    	this.datas.splice(this.datas.indexOf(obj), 1);
		    },
		    err => console.error(err)
		);
	}
	editSede(obj:any){
	}
}
