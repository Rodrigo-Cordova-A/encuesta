import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit{
  average:number= this.data.average;
  explicacion: string = '';
  propuesta1: string = '';
  propuesta2: string = '';
  propuesta3: string = '';


  constructor(
    public dialogRef: MatDialogRef<ResultadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
// Set profile based on average value
if (this.average >= -2 && this.average <= -1.2) {
  this.explicacion = 'Ser de izquierda implica abrazar una serie de valores y principios que se enfocan en la justicia social, la igualdad y la solidaridad. Los jóvenes de izquierda tienen una visión crítica de las desigualdades económicas y sociales que existen en la sociedad. Consideran que estas desigualdades son producto de sistemas y estructuras injustas, y buscan activamente transformarlos. Para ellos, el Estado desempeña un papel central en la promoción del bienestar y la protección de los derechos de los ciudadanos. Abogan por políticas redistributivas que garanticen una distribución más equitativa de la riqueza y oportunidades. Además, suelen defender los derechos humanos, la inclusión de minorías y la protección del medio ambiente como parte integral de su visión de justicia social. ';
} else if (this.average >= -1.19 && this.average <= -0.5) {
  this.explicacion = 'Las personas de centro-izquierda buscan un equilibrio entre los valores de justicia social y la economía de mercado. Reconocen la importancia del libre mercado para el desarrollo económico, pero también abogan por la intervención estatal para corregir las desigualdades y garantizar un acceso equitativo a los recursos y servicios. Consideran que la regulación y el bienestar social son fundamentales para construir una sociedad justa y sostenible. En este sentido, promueven políticas que buscan conciliar el crecimiento económico con la protección de los derechos laborales y sociales. Además, defienden la diversidad cultural y la participación ciudadana en la toma de decisiones políticas como elementos esenciales para una sociedad inclusiva y plural.  ';
} else if (this.average >= -0.49 && this.average <= 0.49) {
  this.explicacion = 'Las personas de centro buscan un enfoque equilibrado y pragmático en la política. No se adhieren a una ideología rígida y buscan soluciones basadas en evidencia y consenso. Consideran que el diálogo y la cooperación son fundamentales para abordar los desafíos políticos y sociales. Buscan un equilibrio entre la libertad individual y la responsabilidad colectiva, así como entre el mercado y la intervención estatal. Valorizan la estabilidad política, la moderación y la búsqueda de consensos en la toma de decisiones. Los jóvenes de centro tienden a ser flexibles en su enfoque político y a evaluar cada situación específica de manera independiente, buscando soluciones que maximicen el bienestar de la sociedad en su conjunto.  ';
} else if (this.average >= 0.5 && this.average <= 1.19) {
  this.explicacion = 'Las personas de centro-derecha valoran la libertad individual y económica como pilares fundamentales. Consideran que el libre mercado y la competencia fomentan el crecimiento económico y la prosperidad. Defienden la responsabilidad individual, la meritocracia y la reducción de la intervención estatal en la economía. Sin embargo, también reconocen la necesidad de un Estado que brinde servicios básicos, garantice la seguridad y promueva el orden social. En este sentido, buscan un equilibrio entre la libertad individual y la responsabilidad colectiva, y creen en la importancia de la colaboración público-privada para alcanzar el desarrollo económico y social. Los jóvenes de centro-derecha valoran la estabilidad política, la moderación y la búsqueda de consensos en la toma de decisiones.  ';
} else if (this.average >= 1.2 && this.average <= 2) {
  this.explicacion = 'Las personas de derecha valoran la libertad individual y económica como principios fundamentales. Consideran que el libre mercado y la competencia son los motores del crecimiento económico y la generación de riqueza. Defienden la limitación de la intervención estatal en la economía y promueven la responsabilidad individual y la meritocracia. Además, enfatizan la importancia de la seguridad, el orden y la preservación de los valores tradicionales en la sociedad. Los jóvenes de derecha suelen abogar por políticas que promuevan la iniciativa privada y la reducción de la carga impositiva, ya que creen que esto estimula la inversión y el desarrollo económico. Consideran que un Estado limitado y eficiente, que brinde las condiciones para que los individuos puedan prosperar y tener éxito, es esencial para el progreso de la sociedad.  ';
} else {
  this.explicacion = 'Perfil desconocido';
}  }

  ngOnInit(): void {
    
  }
}
