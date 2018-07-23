export class BasicUser {

    public district: string;
    public country: string;
    public phoneRes: number;
    public phoneOff: number;
    public phoneCell: number;
    public holyQuran: boolean;
    public name: string;
    public email: string;
    public education: string;
    public dateOfBirth: string;
    public fatherName: string;
    public profession: string;
    public nic: string;
    public postalAddress: string;
    public city: string;

    constructor(district: string, country: string, phoneRes: number, phoneOff: number, phoneCell: number, holyQuran: boolean, name: string, email: string, education: string, dateOfBirth: string, fatherName: string, profession: string, nic: string, postalAddress: string, city: string ) {
     
        this.district = district;
        this.district = district;
        this.country = country;
        this.phoneRes = phoneRes;
        this.phoneOff = phoneOff;
        this.phoneCell = phoneCell;
        this.holyQuran = holyQuran;
        this.name = name;
        this.email = email;
        this.education = education;
        this.dateOfBirth = dateOfBirth;
        this.fatherName = fatherName;
        this.profession = profession;
        this.nic = nic;
        this.postalAddress = postalAddress;
        this.city = city;
    }
}



export class Goshaenasheen extends BasicUser {
    public union_council: string;
    public Tehsil: string
    public member: boolean;
    public ashra: string;

    constructor(district: string, country: string, phoneRes: number, phoneOff: number, phoneCell: number, holyQuran: boolean, name: string, email: string, education: string, dateOfBirth: string, fatherName: string, profession: string, nic: string, postalAddress: string, city: string, password: string, union_council: string,Tehsil: string, member: boolean, ashra: string, ) {  
        
        super(district, country, phoneRes, phoneOff, phoneCell, holyQuran, name, email, education, dateOfBirth, fatherName, profession, nic, postalAddress, city); 
       
        this.union_council = union_council;
        this.Tehsil = Tehsil;
        this.member = member;
        this.ashra = ashra;
    }
}


export class RemoteUser  extends BasicUser {
    public username: string; 
    
    constructor(district: string, country: string, phoneRes: number, phoneOff: number, phoneCell: number, holyQuran: boolean, name: string, email: string, education: string, dateOfBirth: string, fatherName: string, profession: string, nic: string, postalAddress: string, city: string, username: string , password: string) {
       
        super(district, country, phoneRes, phoneOff, phoneCell, holyQuran, name, email, education, dateOfBirth, fatherName, profession, nic, postalAddress, city); 
       
        this. username = username;
    }
}