import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';


@Injectable()
export class UserDataService {

  // current user data saved
  user;

  constructor(private http: HttpClient) { }

  private serverUrl = "http://localhost:8000/api";

  // party Queries

  login(user) {
    let options = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/login/' + user.email + '/' + user.password, { headers: options });
  }

  getParty() {
    let headers = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/counts/4', { headers: headers });
  }

  getPartyTotal() {
    let headers = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/userCounts/4', { headers: headers });
  }

  postData(args: any) {
    let data =  JSON.parse(args);;
    let options = this.createRequestOptions();
    
    // let body = new URLSearchParams();
    // body.set('username', data.username);
    // body.set('name', data.name);
    // body.set('email', data.email);
    // body.set('password', data.password);
    // body.set('fatherName', data.fatherName);
    // body.set('nic', data.nic);
    // body.set('dob', data.dob);
    // body.set('city', data.city);
    // body.set('district', data.district);
    // body.set('provience', data.provience);
    // body.set('country', data.country);
    // body.set('phoneRes', data.phoneRes);
    // body.set('phoneOff', data.phoneOff);
    // body.set('phoneCell', data.phoneCell);
    // body.set('education', data.education);
    // body.set('profession', data.profession);
    // body.set('postalAddress', data.postalAddress);
    // body.set('holyQuran', data.holyQuran);

    let body = `username=${data.username}&name=${data.name}&email=${data.email}&password=${data.password}&fatherName=${data.fatherName}&nic=${data.nic}&dob=${data.dob}&city=${data.city}&district=${data.district}&provience=${data.provience}&country=${data.country}&phoneRes=${data.phoneRes}&phoneOff=${data.phoneOff}&phoneCell=${data.phoneCell}&education=${data.education}&profession=${data.profession}&postalAddress=${data.postalAddress}&holyQuran=${data.holyQuran}`;

    return this.http.post(this.serverUrl + '/party', body, { headers: options });
  }

  // Counts Queries
  postCountsData(data) {
    let options = this.createRequestOptions();

    let body = new URLSearchParams();
    body.set('duroodCount', "tahir");
    body.set('party_id', "23");

    return this.http.post(this.serverUrl + '/counts', body, { headers: options });
  }

  //statistics Queries
  getSatistics(filter) {
    let headers = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/statistics/' + filter, { headers: headers });
  }


  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return headers;
  }


}
