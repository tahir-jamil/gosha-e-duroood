export class RemoteUser {

    public username: string;
    public name: string;
    public email: string;
    public password: string;
    public education: string;
    public dateOfBirth: string;
    public fatherName: string;
    public profession: string;
    public nic: string;
    public postalAddress: string;
    public city: string;
    public district: string;
    public country: string;
    public phoneRes: number;
    public phoneOff: number;
    public phoneCell: number;
    public holyQuran: boolean;


    constructor(username: string, name: string, email: string, password: string, education: string, dateOfBirth: string, fatherName: string, profession: string, nic: string, postalAddress: string, city: string, district: string, country: string, phoneRes: number, phoneOff: number, phoneCell: number, holyQuran: boolean, ) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.education = education;
        this.dateOfBirth = dateOfBirth;
        this.fatherName = dateOfBirth;
        this.profession = profession;
        this.nic = nic;
        this.postalAddress = postalAddress;
        this.city = city;
        this.district = district;
        this.country = country;
        this.phoneRes = phoneRes;
        this.phoneOff = phoneOff;
        this.phoneCell = phoneCell;
        this.holyQuran = holyQuran;
    }
    // personal information
    // username,name,email,password,dob,fathername
    // // education and profession
    // education,profession
    // // address
    // niccity
    // addressdistrict
    // country
    // // contact
    // phoneno
    // phoneOff
    // phoneCell
    // // quran





}