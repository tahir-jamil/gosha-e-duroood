import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserDataService {

  // current user data saved
  user;

  constructor(private http: HttpClient) { }

  private serverUrl = "http://localhost:8000/api";

  // party Queries

  login(user) {
    let options = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/login/'+user.email+'/'+user.password, { headers: options });
  }

  getParty() {
    let headers = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/counts/4', { headers: headers });
  }

  getPartyTotal() {
    let headers = this.createRequestOptions();
    return this.http.get(this.serverUrl + '/userCounts/4', { headers: headers });
  }

  postData(data: any) {
    let options = this.createRequestOptions();
    return this.http.post(this.serverUrl + '/party', data, { headers: options });
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


  countData = [
    { date: '22/08/18', time: '2:30am', count: 100 },
    { date: '22/08/18', time: '2:30am', count: 500 },
    { date: '22/02/18', time: '2:30am', count: 300 },
    { date: '22/08/18', time: '2:30am', count: 1900 },
    { date: '22/04/18', time: '2:30am', count: 2300 },
  ];



  rangeListFilteredData = [
    { rangeName: "Lahore", count: 5 },
    { rangeName: "Karachi", count: 4 },
    { rangeName: "Islamabad", count: 3 },
    { rangeName: "Multan", count: 2 },
    { rangeName: "Gujranwala", count: 200 },
    { rangeName: "Sialkot", count: 6 },
    { rangeName: "Rawalpindi", count: 7 },
    { rangeName: "Wazirabad", count: 8 },
    { rangeName: "Alipur", count: 9 },
  ];



  bussinessData = [
    {
      username: "itstahirjamil",
      name: "tahir jamil",
      email: "tahir@gmail.com",
      password: "tahir.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "pakistan",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "tahir jamil 2",
      email: "tahirjamil9292@gmail.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "pakistan",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "tahir jamil 2",
      email: "taamil9292@gmail.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "pakistan",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "tahir jamil 2",
      email: "tahirjamil92@gmail.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "pakistan",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "tahir jamil 2",
      email: "t292@gmail.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "pakistan",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "tahir jamil 2",
      email: "tgmail.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "pakistan",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "as",
      email: "tahirjamil9292@.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "afghanistan",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "ca",
      email: "tahrjamil.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "canada",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    },
    {
      username: "itstahirjamil",
      name: "awais",
      email: "ta.com",
      password: "abc123.",
      fathername: "Jameel",
      nic: "3510564781557",
      dateofBirth: "2018-09-19",
      city: "Lahore",
      district: "Lahore",
      provience: "punjab",
      country: "india",
      phoneres: "8997648267",
      phoneoff: "976889680658",
      phonecell: "4889678001",
      holyQuran: "0",
      education: "Masters",
      profession: "IT professional",
      postalAddress: "Gajumata"
    }


  ];
}
