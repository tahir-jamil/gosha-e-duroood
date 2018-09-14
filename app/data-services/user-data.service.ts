import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  static setString(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }



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
      name: "as",
      email: "tahirjamil9292@gmail.com",
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
      email: "tahrjamil9292@gmail.com",
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
      email: "tahirjamil9292@gmail.com",
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
