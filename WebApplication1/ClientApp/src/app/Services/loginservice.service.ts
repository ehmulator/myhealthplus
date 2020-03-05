import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {
  myAppUrl: string = "";
  token: string;
  header: any;


  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    debugger
    this.myAppUrl = baseUrl;
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);  
  }
  Login(model: any) {
    debugger
    return this._http.post(this.myAppUrl + 'api/User/Login', model, { headers: this.header })
      .map((response: Response) => { debugger;  response.json() })
      .catch(this.errorHandler)
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
