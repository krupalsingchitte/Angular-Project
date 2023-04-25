import { Component } from '@angular/core';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.css']
})
export class VariationComponent {


  inputNumber: any
  str: any
  number: any




  palindromeNum() {

    let originalNum = this.inputNumber.toString();
    let reversedNum = originalNum.split('').reverse().join('');
    if (reversedNum == originalNum) {
      this.number = "Number is Palindrome"
    } else {
      this.number = "Number is not Palindrome"
    }

  }
  armStrong() {
    let numString = this.inputNumber.toString();
    let numDigits = numString.length;
    let sum = 0;

    for (let digit of numString) {
      sum += Math.pow(Number(digit), numDigits);
    }
    if (sum == this.inputNumber) {
      this.number = "Number is Armstrong"
    } else {
      this.number = "Number is not Armstrong"
    }
  }
  evenorOdd() {

    if (this.inputNumber % 2 == 0) {
      this.number = "Number is Even"
    } else {
      this.number = "Number is Odd"
    }
  }
  primeorNot() {
    if (this.inputNumber <= 1) {
      this.number = "Number is not Prime"

    }

    let sqrt = Math.sqrt(this.inputNumber);
    for (let i = 2; i <= sqrt; i++) {
      if (this.inputNumber % i === 0) {
        this.number = "Number is not Prime"
      } else {
        this.number = "Number is Prime"

      }
    }
  }
  perfectsqrt() {

    this.number = Math.sqrt(this.inputNumber);

  }
  factorial() {
    if (this.inputNumber === 0 || this.inputNumber === 1) {
      this.number = 1;
    }

    let result = 1;
    for (let i = 2; i <= this.inputNumber; i++) {
      result *= i;
    }

    this.number = result;
  }

  random() {
    if (this.inputNumber != null) {
      this.number = Math.round((Math.random() * this.inputNumber))
    }
    else {

     this.number = "Enter range from 0 to n"

    }
  }

}




