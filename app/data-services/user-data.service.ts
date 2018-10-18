import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { platformNames } from "platform";
import { device } from "platform";

@Injectable()
export class UserDataService {

  // current user data saved
  user;
  totalCountsCounter = 0;
  serverUrl = "";
  constructor(private http: HttpClient) { 
    var nativePlatformLocalhost;

    /*in some function or globally*/
    if (device.os === platformNames.ios) {
      /*localhost for ios*/
      nativePlatformLocalhost = "localhost";
      this.serverUrl = "http://localhost:8000/api";
    }
    else if (device.os === platformNames.android) {
      /*localhost for android*/
      nativePlatformLocalhost = "10.0.0.2";
      this.serverUrl = "http://10.0.0.2:8000/api";
    }
  }


  // party Queries

  login(user) {
    let options = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/login/' + user.email + '/' + user.password, { headers: options });
  }

  getParty() {
    let headers = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/counts/'+parseInt(localStorage.getItem("partyId")), { headers: headers });
  }

  getPartyTotal() {
    let headers = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/userCounts/'+parseInt(localStorage.getItem("partyId")), { headers: headers });
  }

  postData(args: any) {
    let data =  JSON.parse(args);
    let options = this.createRequestOptions();
    let body = `username=${data.username}&name=${data.name}&email=${data.email}&password=${data.password}&fatherName=${data.fatherName}&nic=${data.nic}&dob=${data.dob}&city=${data.city}&district=${data.district}&provience=${data.provience}&country=${data.country}&phoneRes=${data.phoneRes}&phoneOff=${data.phoneOff}&phoneCell=${data.phoneCell}&education=${data.education}&profession=${data.profession}&postalAddress=${data.postalAddress}&holyQuran=${data.holyQuran}`;

    return this.http.post(this.serverUrl + '/party', body, { headers: options });
  }



  // apply goasha 

  postGoasha(args) {
    let data =  JSON.parse(args);
    let options = this.createRequestOptions();
    let body = `name=${data.name}&fatherName=${data.fatherName}&postalAddress=${data.postalAddress}&union_council=${data.union_council}&Tehsil=${data.Tehsil}&city=${data.city}&district=${data.district}&provience=${data.provience}&country=${data.country}&education=${data.education}&profession=${data.profession}&dob=${data.dob}&nic=${data.nic}&email=${data.email}&phoneRes=${data.phoneRes}&phoneOff=${data.phoneOff}&phoneCell=${data.phoneCell}&holyQuran=${data.holyQuran}&ashra=${data.ashra}&updated_at=${data.updated_at}&created_at=${data.created_at}`;

    return this.http.post(this.serverUrl + '/applyGoashas', body, { headers: options });
  }
  
  // Counts Queries
  postCountsData(data) {
    let options = this.createRequestOptions();

    let body = `duroodCount=${data.duroodCount}&party_id=${data.party_id}`;
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
