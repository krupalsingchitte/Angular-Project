import { Component } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent {

  inputString:any
  str:any
  outPut:any


  upperCase(){
    let upper:any="In UpperCase : "
    let myString = this.inputString;
    myString = myString.toUpperCase();
    this.outPut=myString
    
     if(this.inputString!=null){

      this.str=upper
    }
    
  }

  length(){

    let strlen:any="length of String : "
    let length = this.inputString;
     length = length.length;
    this.outPut=length
    if(this.inputString!=null){
    this.str=strlen
    }

  }
  strcontainNumberornot(){
    let strnumor:any="String Contain Number or Not : "
    let myString = this.inputString;
    let isNumber =/\d/.test(myString);
    this.outPut=isNumber
    if(this.inputString!=null){
      this.str=strnumor
    }
  }
  

}

