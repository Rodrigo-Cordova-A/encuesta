import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  totalRespuestas: number = 0;
contadorPositivo: number = 0;
contadorNegativo: number = 0;
contadorNeutro: number = 0;
resp1: number = 0;
resp2: number = 0;
resp3: number = 0;
resp4: number = 0;
resp5: number = 0;
resp6: number = 0;
resp7: number = 0;
resp8: number = 0;
resp9: number = 0;
resp10: number = 0;
countera: number = 0;
counterb: number = 0;
counterc: number = 0;
counterd: number = 0;
countere: number = 0;

onOpinionChange1(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      this.countera = this.countera+1
      break;
    case 'b':
      resp1 = -1;
      this.counterb = this.counterb+1

      break;
    case 'c':
      resp1 = 0;
      this.counterc = this.counterc+1

      break;
    case 'd':
      resp1 = 1;
      this.counterd = this.counterd+1

      break;
    case 'e':
      resp1 = 2;
      this.countere = this.countere+1

      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp1 = resp1;
  console.log(resp1);
}

onOpinionChange2(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      this.countera = this.countera+1
      break;
    case 'b':
      resp1 = -1;
      this.counterb = this.counterb+1

      break;
    case 'c':
      resp1 = 0;
      this.counterc = this.counterc+1

      break;
    case 'd':
      resp1 = 1;
      this.counterd = this.counterd+1

      break;
    case 'e':
      resp1 = 2;
      this.countere = this.countere+1

      break;
    default:
      resp1 = 0;
      break;
  }


  this.resp2 = resp1;
  console.log(resp1);
}
onOpinionChange3(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      this.countera = this.countera+1
      break;
    case 'b':
      resp1 = -1;
      this.counterb = this.counterb+1

      break;
    case 'c':
      resp1 = 0;
      this.counterc = this.counterc+1

      break;
    case 'd':
      resp1 = 1;
      this.counterd = this.counterd+1

      break;
    case 'e':
      resp1 = 2;
      this.countere = this.countere+1

      break;
    default:
      resp1 = 0;
      break;
  }


  this.resp3 = resp1;
  console.log(resp1);
}
onOpinionChange4(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      break;
    case 'b':
      resp1 = -1;
      break;
    case 'c':
      resp1 = 0;
      break;
    case 'd':
      resp1 = 1;
      break;
    case 'e':
      resp1 = 2;
      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp4 = resp1;
  console.log(resp1);
}
onOpinionChange5(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      break;
    case 'b':
      resp1 = -1;
      break;
    case 'c':
      resp1 = 0;
      break;
    case 'd':
      resp1 = 1;
      break;
    case 'e':
      resp1 = 2;
      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp5 = resp1;
  console.log(resp1);
}
onOpinionChange9(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      break;
    case 'b':
      resp1 = -1;
      break;
    case 'c':
      resp1 = 0;
      break;
    case 'd':
      resp1 = 1;
      break;
    case 'e':
      resp1 = 2;
      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp9 = resp1;
  console.log(resp1);
}
onOpinionChange6(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      break;
    case 'b':
      resp1 = -1;
      break;
    case 'c':
      resp1 = 0;
      break;
    case 'd':
      resp1 = 1;
      break;
    case 'e':
      resp1 = 2;
      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp6 = resp1;
  console.log(resp1);
}
onOpinionChange7(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      break;
    case 'b':
      resp1 = -1;
      break;
    case 'c':
      resp1 = 0;
      break;
    case 'd':
      resp1 = 1;
      break;
    case 'e':
      resp1 = 2;
      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp7 = resp1;
  console.log(resp1);
}
onOpinionChange8(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      break;
    case 'b':
      resp1 = -1;
      break;
    case 'c':
      resp1 = 0;
      break;
    case 'd':
      resp1 = 1;
      break;
    case 'e':
      resp1 = 2;
      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp8 = resp1;
  console.log(resp1);
}
onOpinionChange10(event: MatRadioChange): void {
  const selectedOption = event.source.value;
  let resp1: number;

  switch (selectedOption) {
    case 'a':
      resp1 = -2;
      break;
    case 'b':
      resp1 = -1;
      break;
    case 'c':
      resp1 = 0;
      break;
    case 'd':
      resp1 = 1;
      break;
    case 'e':
      resp1 = 2;
      break;
    default:
      resp1 = 0;
      break;
  }

  this.resp10 = resp1;
  console.log(resp1);
}
calcularPromedioYContar(): void {
  // Calculate average
  const respValues = [this.resp1, this.resp2, this.resp3, this.resp4, this.resp5, this.resp6, this.resp7, this.resp8, this.resp9, this.resp10];
  const sum = respValues.reduce((total, value) => total + value, 0);
  const average = sum / respValues.length;

  // Count occurrences
  const valueCounts: { [key: number]: number } = {};
  for (const value of respValues) {
    if (valueCounts[value]) {
      valueCounts[value]++;
    } else {
      valueCounts[value] = 1;
    }
  }

  // Output results
  console.log('Average:', average);
  console.log('Value Counts:', valueCounts);
}


}

