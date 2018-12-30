import { Component, OnInit, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { UserDataService } from '~/data-services/user-data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})

export class SignupComponent implements OnInit {

  signUpUser = {
    name: "",
    fatherName: "",

    username: "",
    email: "",
    password: "",

    dateOfBirth: "",
    // union_council: "",
    city: "",
    district: "",
    provience: "",
    country: "",
    education: "",
    profession: "",
    phoneRes: "",
    phoneOff: "",
    phoneCell: "",
    nic: "",
    postalAddress: "",
    holyQuran: false,
  };
  constructor(private _page: Page, private userDataService: UserDataService, private routerExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
  }

  toggleCheck() {
    setTimeout(() => {
      this.signUpUser.holyQuran = !this.signUpUser.holyQuran;
    }, 200);
  }
  // options_edu = ["  Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];

  pickDate() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      title: 'Please enter your birthday',
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      this.signUpUser.dateOfBirth = result['year'] + '-' + result['month'] + '-' + result['day'];
      if (!result['year']) {
        alert("please select your date of birth");
        this.signUpUser.dateOfBirth = "";
      }

      console.dir(this.signUpUser.dateOfBirth);
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }


  onBlur(args) {
    let textField = <TextField>args.object;
    if (textField.keyboardType == 'number') {
      this.validateNumber(textField.text)
      if (this.validateNumber(textField.text)) {
        return true;
      } else {
        textField.text = '';
      }
      console.log("validating number");

    } else if (textField.keyboardType == 'phone') {
      this.validateNumber(textField.text);
      if (this.validateNumber(textField.text)) {
        return true;
      } else {
        textField.text = '';
      }
      console.log("validating number");

    } else if (textField.hint == 'Email') {
      this.validateEmail(textField.text);
      if (this.validateEmail(textField.text)) {
        return true;
      } else {
        textField.text = '';
      }
      console.log("validating email");

    } else {
      if (this.validateString(textField.text)) {
        return true;
      } else {
        textField.text = '';
      }
      console.log("validating string");

    }
  }

  validateString(text) {
    if (!/^[a-zA-Z\s]*$/g.test(text)) {
      alert("Invalid Field, input alphabets only ");
      return false;
    } else {
      return true;
    }
  }

  validateNumber(text) {
    if (!isNaN(text)) {
      console.log("its a number");
      return true;

    } else {
      alert("Invaild Field, input numbers only ");
      return false;
    }
  }


  validateEmail(value) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }
    return true;
  }


  submitForm() {
    let variableForPostData = true;
    if (this.signUpUser.name == "") {
      variableForPostData = false;
      alert("Please input your name ")
    }
    else if (this.signUpUser.fatherName == "") {
      variableForPostData = false;
      alert("Please input your father name ")
    }
    else if (this.signUpUser.dateOfBirth == "") {
      variableForPostData = false;
      alert("Please input date of birth ")
    }
    else if (this.signUpUser.username == "") {
      variableForPostData = false;
      alert("Please input your username ")
    }
    else if (this.signUpUser.email == "") {
      variableForPostData = false;
      alert("Please input your email ")
    }
    else if (this.signUpUser.password == "") {
      variableForPostData = false;
      alert("Please input your password ")
    }
    else if (this.signUpUser.country == "") {
      variableForPostData = false;
      alert("Please input country details ")
    }
    else if (this.signUpUser.provience == "") {
      variableForPostData = false;
      alert("Please input provience details ")
    }
    else if (this.signUpUser.district == "") {
      variableForPostData = false;
      alert("Please input district details ")
    }
    else if (this.signUpUser.city == "") {
      variableForPostData = false;
      alert("Please input city details ")
    }
   
    else if (this.signUpUser.education == "") {
      variableForPostData = false;
      alert("Please input educational details ")
    }

    else if (this.signUpUser.profession == "") {
      variableForPostData = false;
      alert("Please input profession ")
    }
    else if (this.signUpUser.phoneRes == "") {
      variableForPostData = false;
      alert("Please input phone residence number")
    }
    else if (this.signUpUser.phoneOff == "") {
      variableForPostData = false;
      alert("Please input office phone number ")
    }
    else if (this.signUpUser.phoneCell == "") {
      variableForPostData = false;
      alert("Please input your cell phone number ")
    }
    else if (this.signUpUser.postalAddress == "") {
      variableForPostData = false;
      alert("Please input your postal address ")
    }
    else if (this.signUpUser.nic == "") {
      variableForPostData = false;
      alert("Please input your nic number ")
    }
    else {
      variableForPostData = true;
      console.log("all fields complete");
    }

    if (variableForPostData) {
      this.userDataService.postData(this.signUpUser).subscribe(res => {
        console.dir(res);
        this.routerExtensions.navigate(['/login'], {
          transition: {
            name: 'fade',
            curve: 'linear'
          }
        });
      }, (error) => {
        console.dir(error);
      });
    }
  }
}

