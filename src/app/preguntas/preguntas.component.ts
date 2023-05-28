import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ResultadosComponent } from './resultados/resultados.component';
import { MatDialog } from '@angular/material/dialog';

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
average: number = 0;

profile: string = '';
constructor(
  private dialog: MatDialog,

){

}

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
    // Set profile based on average value
    if (average >= -2 && average <= -1.2) {
      this.profile = 'Obtuviste un perfil de izquierda';
    } else if (average >= -1.19 && average <= -0.5) {
      this.profile = 'Obtuviste un perfil de centro-izquierda';
    } else if (average >= -0.49 && average <= 0.49) {
      this.profile = 'Obtuviste un perfil de centro';
    } else if (average >= 0.5 && average <= 1.19) {
      this.profile = 'Obtuviste un perfil de centro-derecha';
    } else if (average >= 1.2 && average <= 2) {
      this.profile = 'Obtuviste un perfil de derecha';
    } else {
      this.profile = 'Perfil desconocido';
    }

  // Output results
  console.log('Average:', average);
  console.log('Respuestas de izquierda:', valueCounts[-2] || 0);
  console.log('Respuestas de centro - izquierda:', valueCounts[-1] || 0);
  console.log('Respuestas de centro:', valueCounts[0] || 0);
  console.log('Respuestas de centro derecha:', valueCounts[1] || 0);
  console.log('Respuestas de derecha:', valueCounts[2] || 0);

  const dialogRef = this.dialog.open(ResultadosComponent, {
    width: '40%',
    data: { average: average,
            profile: this.profile,
            izquierda: valueCounts[-2] || 0 ,
            centro_izquierda: valueCounts[-1] || 0 ,
            centro: valueCounts[0] || 0 ,
            centro_derecha: valueCounts[1] || 0 ,
            derecha: valueCounts[2] || 0 }

  });
}


}

