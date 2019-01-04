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
      this.serverUrl = "http://goshaedurood-env.qyciexcfrw.us-east-2.elasticbeanstalk.com/public/api";
    }
    else {
      /*localhost for android*/
      nativePlatformLocalhost = "10.0.0.2";
      this.serverUrl = "http://10.0.0.2:8000/api";
    }
  }



  // party Queries

  getAdmin() {
    let options = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/admin', { headers: options });
  }


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
    let data = args;
    let holyQuran = 0;
    if (data.holyQuran == true) {
      holyQuran = 1;
    } else {
      holyQuran = 0;
    }
    let options = this.createRequestOptions();
    let body = `username=${data.username}&name=${data.name}&email=${data.email}&password=${data.password}&fatherName=${data.fatherName}&nic=${data.nic}&dob=${data.dateOfBirth}&city=${data.city}&district=${data.district}&provience=${data.provience}&country=${data.country}&phoneRes=${data.phoneRes}&phoneOff=${data.phoneOff}&phoneCell=${data.phoneCell}&education=${data.education}&profession=${data.profession}&postalAddress=${data.postalAddress}&holyQuran=${holyQuran}`;

    return this.http.post(this.serverUrl + '/party', body, { headers: options });
  }



  // apply goasha 

  postGoasha(args) {
    let data =  args;
    let options = this.createRequestOptions();
    let holyQuran = 0;
    if (data.holyQuran == true) {
      holyQuran = 1;
    } else {
      holyQuran = 0;
    }
    let body = `name=${data.name}&fatherName=${data.fatherName}&postalAddress=${data.postalAddress}&union_council=${data.union_council}&Tehsil=${data.tehsil}&city=${data.city}&district=${data.district}&provience=${data.provience}&country=${data.country}&education=${data.education}&profession=${data.profession}&dob=${data.dateOfBirth}&nic=${data.nic}&email=${data.email}&phoneRes=${data.phoneRes}&phoneOff=${data.phoneOff}&phoneCell=${data.phoneCell}&holyQuran=${holyQuran}&ashra=${data.ashra}&updated_at=${data.updated_at}&created_at=${data.created_at}&party_id=${parseInt(localStorage.getItem("partyId"))}`;

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
