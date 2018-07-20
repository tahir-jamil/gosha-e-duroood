export class Goshaenasheen {
    public name: string;
    public fathers_Name: string;
    public postalAddress: string;
    public union_council: string;
    public Tehsil: string;
    public district: string;
    public country: string;
    public education: string;
    public profession: string;
    public dateOfBirth: string;
    public nic: string;
    public email: string;
    public phoneCell: number;
    public phoneRes: number;
    public phoneOff: number;
    public holyQuran: boolean;
    public member: boolean;
    public ashra: string;

    constructor(name: string,fathers_Name: string,postalAddress: string,union_council: string,Tehsil: string,district: string,country: string,education: string,profession: string,dateOfBirth: string,nic: string,email: string, phoneCell: number, phoneRes: number, phoneOff: number, holyQuran: boolean, member: boolean, ashra: string, ) {
        this.name = name;
        this.fathers_Name = fathers_Name;
        this.postalAddress = postalAddress;
        this.union_council = union_council;
        this.Tehsil = Tehsil;
        this.district = district;
        this.country = country;
        this.education = education;
        this.profession = profession;
        this.dateOfBirth = dateOfBirth;
        this.nic = nic;
        this.email = email;
        this.phoneCell = phoneCell;
        this.phoneRes = phoneRes;
        this.phoneOff = phoneOff;
        this.holyQuran = holyQuran;
        this.member = member;
        this.ashra = ashra;

    }



}
