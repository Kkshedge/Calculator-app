import { Component} from '@angular/core';

@Component({
	selector: 'app-calculators',
	templateUrl: './calculators.component.html',
	styleUrls: ['./calculators.component.css']
})

export class CalculatorsComponent {
	public num1:number;
	public num2:number;
	public num3:number;
	public num4:number;
 
	add() {
		this.num3=this.num1+this.num2; 
	}

	sub() {
		this.num3=this.num1-this.num2; 
	}

	mul() {
		this.num3=this.num1*this.num2; 
	}

	div() {
		this.num3=this.num1/this.num2; 
	}
 
	fac() {
		let i, fact = 1;
		for (i = 1; i <= this.num3; i++) {
			fact = fact * i;
		}
 
		this.num3=fact; 
	}

	prime() {
		let n = 0;
		let i, flag = true;
		for (i = 2; i < this.num1; i++) {
			if (this.num1 % i == 0) {
				flag = false;
				break;
			}
		}

		if (flag === true) {
			this.num3 = 1;
		} else {
			this.num3 = 0;
		}
}
