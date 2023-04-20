import { Component } from '@angular/core';

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

// Método que se llama al hacer clic en el botón
calcularPromedioYContar() {
  let respuestas = document.getElementsByClassName("respuestasb") as HTMLCollectionOf<HTMLInputElement>;
  let suma = 0; // Variable para almacenar la suma de los valores de las respuestas seleccionadas
  let seleccionados = 0; // Variable para almacenar el número de respuestas seleccionadas

  // Recorrer todas las respuestas
  for (let i = 0; i < respuestas.length; i++) {
    // Si la respuesta está seleccionada
    if (respuestas[i]['checked']) {
      let valor = parseInt(respuestas[i]['value']); // Obtener el valor de la respuesta seleccionada
      suma += valor; // Sumar el valor a la suma total
      seleccionados++; // Incrementar el contador de respuestas seleccionadas

      // Incrementar el contador correspondiente
      if (valor > 0) {
        this.contadorPositivo++;
      } else if (valor < 0) {
        this.contadorNegativo++;
      } else {
        this.contadorNeutro++;
      }
    }
  }

  // Calcular el promedio de los valores de las respuestas seleccionadas
  let promedio = suma / seleccionados;

  // Actualizar el total de respuestas
  this.totalRespuestas += seleccionados;

  console.log('Promedio: ' + promedio);
  console.log('Respuestas positivas: ' + this.contadorPositivo);
  console.log('Respuestas negativas: ' + this.contadorNegativo);
  console.log('Respuestas neutras: ' + this.contadorNeutro);
}
}

