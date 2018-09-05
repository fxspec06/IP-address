import { Component } from '@angular/core';


/* added */
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IP-address';
  publicIP = '';
  
  /*
	following was added
  */
  
	constructor(private http: HttpClient) {
			/* fetch public IP w/ URL */
	  this.http.get('https://api.ipify.org?format=json').subscribe(data => {
			  this.publicIP=data['ip'];
		});
	}
}
