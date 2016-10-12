import { Injectable } from '@angular/core';
import { Config } from '../../shared/index';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
	user:any;
	status:boolean;
	http:Http;
	//construimos los metodos
	constructor(http: Http){
		this.http = http;
	}
	restore(){}
	save(){}
	createHeaders() {
		var headers = new Headers()
	    headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
		return headers;
	}
	login(username:string,password:string){
		let body = `identifier=${username}&password=${password}`;
		let header = this.createHeaders();
		return this.http.post(Config.API+'/login/admin',body,{
	      headers: header
	    })
		.map((res:Response) => {
			console.log(res.json());
			// let data = res.json(); 
			// if(data.response == "200" && data.status == 1){
	  //   		this.user = data.user;
	  //   		this.status = true;
	  //   		return true;
	  //   	}
	  //   	else{
	  //   		return false;
	  //   	}
		});
	}
	logout(){
		this.status = false;
		this.user = null;
	}
	isLogged(){
		return this.status;
	}
	getUser(){
		if(this.status){
			return this.user;
		}
		else{
			return null;
		}
		
	}
}