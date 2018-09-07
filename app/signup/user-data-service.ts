export class RemoteUser {

    public firstName: string;
    public lastName: string;
    public email: string;
    public city: string;
    public district: string;
    public provience: string;
    public country: string;
    public phoneRes: number;
    public phoneOff: number;
    public phoneCell: number;
    public holyQuran: boolean;



    constructor(firstName: string,lastName: string,email: string,city: string,district: string, provience:string, country: string,phoneRes: number,phoneOff: number,phoneCell: number, holyQuran: boolean) {
        firstName = firstName; 
        lastName = lastName;
        email = email;
        city = city;
        district = district;
        provience=provience;
        country = country;
        phoneRes = phoneRes;
        phoneOff = phoneOff;
        phoneCell = phoneCell;
        holyQuran = holyQuran;
    }
    




}