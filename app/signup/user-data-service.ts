export class RemoteUser {

    public username: string;
    public name: string;
    public education: string;
    public dateOfBirth: string;
    public password: string;
    public fatherName: string;
    public profession: string;
    public nic: string;
    public postalAddress: string;
    public country: string;
    public district: string;
    public phoneRes: number;
    public phoneOff: number;
    public phoneCell: number;
    public email: string;
    public holyQuran: boolean;
    public userType: string;

    constructor(username: string, name: string, education: string, dateOfBirth: string, password: string, fatherName: string, profession: string, nic: string, postalAddress: string, country: string, district: string, phoneRes: number, phoneOff: number, phoneCell: number, email: string, holyQuran: boolean, userType: string) {
        this.username = username;
        this.name = name;
        this.education = education;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.fatherName = fatherName;
        this.profession = profession;
        this.nic = nic;
        this.postalAddress = postalAddress;
        this.country = country;
        this.district = district;
        this.phoneRes = phoneRes;
        this.phoneOff = phoneOff;
        this.phoneCell = phoneCell;
        this.email = email;
        this.holyQuran = holyQuran;
        this.userType = userType;
    }



}