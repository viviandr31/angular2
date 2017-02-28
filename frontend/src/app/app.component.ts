import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [UserService]
})

export class AppComponent implements OnInit {

	title = 'Angular2 + Node.js';
	username: string;
	password: string;
	results = [];
	userService: any;

	constructor(@Inject(UserService) userService) {
	  this.userService = userService;
	  this.getUsers();
	}

	ngOnInit() {
	  this.results = [];
	  this.getUsers();
	}

	getUsers() {
	  this.userService.getUsers()
	  .map(res => res.json())
	  .subscribe(results => this.results = results);
	}

	addUser(username, password) {
		var data = {
			username: username,
			password: password
		};

	  var result = this.userService.addUser(data)
	    .subscribe(res => {
	    	if(res.success == "true") {
	    		this.results.unshift(data);
	    	}
	      this.password = "";
	      this.username = "";
	    });
	}

	deleteUser(username) {
		var data = {
			username: username,
		};

	  var result = this.userService.deleteUser(data)
	    .subscribe(res => {
	    	if(res.success == "true") {
	    		// this.results.unshift(data);
					this.results = this.results.filter(h => h.username != data['username']);
	    	}
	      this.username = "";
	      console.log(res);
	    });
	}
	
}