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
  titpropuesta1: string = '';
  titpropuesta2: string = '';
  titpropuesta3: string = '';
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
} 

if (this.average >= -2 && this.average <= -1.2) {
  this.titpropuesta1 = 'Asambleas ciudadanas';
} else if (this.average >= -1.19 && this.average <= -0.5) {
  this.titpropuesta1 = 'Democracia deliberativa';
} else if (this.average >= -0.49 && this.average <= 0.49) {
  this.titpropuesta1 = 'Presupuestos participativos';
} else if (this.average >= 0.5 && this.average <= 1.19) {
  this.titpropuesta1 = 'Voluntariado comunitario';
} else if (this.average >= 1.2 && this.average <= 2) {
  this.titpropuesta1 = 'Programas de educación cívica';
} else {
  this.titpropuesta1 = 'Perfil desconocido';
}  

if (this.average >= -2 && this.average <= -1.2) {
  this.propuesta1 = 'La creación de asambleas ciudadanas en diferentes niveles de gobierno. Estas asambleas permitirían a la población participar activamente en la toma de decisiones políticas y en la definición de las políticas públicas. Serían espacios de debate y deliberación donde los ciudadanos podrían expresar sus opiniones, plantear propuestas y discutir temas de interés público. Estas asambleas garantizarían la inclusión de diferentes voces y perspectivas, promoviendo así una democracia más participativa y plural.';
} else if (this.average >= -1.19 && this.average <= -0.5) {
  this.propuesta1 = 'Esto implica la creación de espacios y mecanismos para que los ciudadanos puedan participar activamente en la discusión y el debate sobre temas políticos y sociales. Se podrían establecer foros ciudadanos, mesas de diálogo y debates abiertos donde los ciudadanos puedan expresar sus opiniones, intercambiar ideas y llegar a acuerdos colectivos. La democracia deliberativa busca promover una participación informada y reflexiva, donde se valore el diálogo y se busquen soluciones consensuadas.';
} else if (this.average >= -0.49 && this.average <= 0.49) {
  this.propuesta1 = 'Esto implica involucrar a los ciudadanos en la toma de decisiones sobre cómo se asignan los recursos públicos en su comunidad. Se podrían realizar asambleas vecinales, consultas populares o plataformas en línea donde los ciudadanos puedan proponer y votar proyectos de inversión. De esta manera, se garantiza que las prioridades de la ciudadanía sean tenidas en cuenta en la distribución de los fondos públicos.';
} else if (this.average >= 0.5 && this.average <= 1.19) {
  this.propuesta1 = ' Se podrían organizar programas y proyectos que incentiven a los ciudadanos a dedicar parte de su tiempo y habilidades para ayudar a su comunidad. Esto podría incluir actividades como limpieza de espacios públicos, apoyo a personas vulnerables, asistencia en organizaciones sin fines de lucro, entre otros. El voluntariado comunitario no solo fortalece el tejido social, sino que también fomenta la responsabilidad individual y el compromiso cívico.';
} else if (this.average >= 1.2 && this.average <= 2) {
  this.propuesta1 = 'Centrarse en la promoción de programas de educación cívica. Se podría enfatizar la importancia de educar a los ciudadanos sobre los valores democráticos, la responsabilidad individual y los principios de libre mercado. Estos programas podrían incluir talleres, conferencias y materiales educativos que fomenten la participación activa en el proceso político, la comprensión de los derechos y deberes ciudadanos, y la promoción de la iniciativa personal.';
} else {
  this.propuesta1 = 'Perfil desconocido';
}  

if (this.average >= -2 && this.average <= -1.2) {
  this.titpropuesta2 = 'Presupuestos participativos';
} else if (this.average >= -1.19 && this.average <= -0.5) {
  this.titpropuesta2 = 'Políticas de transparencia y rendición de cuentas ';
} else if (this.average >= -0.49 && this.average <= 0.49) {
  this.titpropuesta2 = 'Consejos ciudadanos';
} else if (this.average >= 0.5 && this.average <= 1.19) {
  this.titpropuesta2 = 'Emprendimiento social';
} else if (this.average >= 1.2 && this.average <= 2) {
  this.titpropuesta2 = 'Promoción del emprendimiento y la libre empresa ';
} else {
  this.titpropuesta2 = 'Perfil desconocido';
}  

if (this.average >= -2 && this.average <= -1.2) {
  this.propuesta2 = 'La implementación de presupuestos participativos a nivel local. Esto implica que una parte del presupuesto municipal o comunitario se destine a proyectos propuestos y decididos directamente por los ciudadanos. Se realizarían consultas y reuniones públicas donde los residentes podrían proponer ideas y votar por los proyectos que consideren más importantes para su comunidad.';
} else if (this.average >= -1.19 && this.average <= -0.5) {
  this.propuesta2 = 'Esto implica garantizar el acceso a la información, la publicación de datos relevantes y la apertura de los procesos de toma de decisiones. Además, se podrían establecer mecanismos de control ciudadano, como auditorías ciudadanas o comités de seguimiento, para asegurar que los recursos públicos se utilicen de manera eficiente y se cumplan los compromisos adquiridos. Estas políticas fortalecerían la confianza de los ciudadanos en las instituciones y promoverían una participación informada y crítica.';
} else if (this.average >= -0.49 && this.average <= 0.49) {
  this.propuesta2 = 'Una persona de centro podría promover la creación de consejos ciudadanos en diferentes áreas temáticas, como salud, educación, medio ambiente o seguridad. Estos consejos estarían conformados por representantes de la sociedad civil, expertos y funcionarios públicos, y tendrían como objetivo fomentar la participación ciudadana en la formulación de políticas públicas. Los consejos ciudadanos servirían como espacios de diálogo y colaboración, donde se discuten propuestas, se generan recomendaciones y se promueve la toma de decisiones conjuntas. ';
} else if (this.average >= 0.5 && this.average <= 1.19) {
  this.propuesta2 = 'Esto implica brindar apoyo y recursos a aquellos ciudadanos que deseen emprender proyectos con un impacto social positivo. Se podrían establecer incubadoras de negocios sociales, programas de capacitación y acceso a financiamiento para aquellos emprendedores que buscan soluciones innovadoras a los desafíos de la comunidad. El emprendimiento social permite a los ciudadanos tomar un papel activo en la generación de empleo, la mejora de la calidad de vida y el impulso de la economía local. ';
} else if (this.average >= 1.2 && this.average <= 2) {
  this.propuesta2 = 'Se podrían crear programas de apoyo a emprendedores, brindando asesoría, capacitación y acceso a financiamiento para aquellos que deseen iniciar sus propios negocios. Además, se podría fomentar la participación ciudadana en la creación de políticas que promuevan un entorno favorable para la actividad empresarial, como la reducción de regulaciones y la simplificación de trámites burocráticos. ';
} else {
  this.propuesta2 = 'Perfil desconocido';
}  

if (this.average >= -2 && this.average <= -1.2) {
  this.titpropuesta3 = 'Referéndums y consultas populares';
} else if (this.average >= -1.19 && this.average <= -0.5) {
  this.titpropuesta3 = 'Participación en la planificación urbana ';
} else if (this.average >= -0.49 && this.average <= 0.49) {
  this.titpropuesta3 = 'Participación en la evaluación de políticas públicas';
} else if (this.average >= 0.5 && this.average <= 1.19) {
  this.titpropuesta3 = 'Consultas ciudadanas en decisiones clave';
} else if (this.average >= 1.2 && this.average <= 2) {
  this.titpropuesta3 = 'Voluntariado basado en la sociedad civil ';
} else {
  this.titpropuesta3 = 'Perfil desconocido';
}  

if (this.average >= -2 && this.average <= -1.2) {
  this.propuesta3 = 'Estas herramientas permiten que los ciudadanos voten y tomen decisiones sobre temas clave que afectan a la sociedad. Los referéndums pueden abordar cuestiones políticas, económicas o sociales de gran relevancia, como cambios constitucionales, acuerdos internacionales o políticas públicas específicas. La realización de consultas populares sobre temas relevantes garantiza que las decisiones sean tomadas con la participación directa de la ciudadanía y fortalece la democracia al permitir que la voz de la gente se escuche y se tenga en cuenta en la toma de decisiones políticas.';
} else if (this.average >= -1.19 && this.average <= -0.5) {
  this.propuesta3 = 'Esto implica involucrar a los ciudadanos en la toma de decisiones sobre el desarrollo de sus ciudades y comunidades. Se podrían llevar a cabo consultas públicas, talleres y mesas de trabajo donde los residentes puedan expresar sus necesidades y preferencias en relación con la planificación del transporte, la vivienda, los espacios verdes y otros aspectos urbanos. La participación ciudadana en la planificación urbana garantizaría que las políticas y proyectos sean más inclusivos y respondan a las demandas reales de la población, promoviendo así una ciudadanía activa y comprometida. ';
} else if (this.average >= -0.49 && this.average <= 0.49) {
  this.propuesta3 = ' Esto implica que los ciudadanos tengan la oportunidad de dar su opinión sobre la efectividad y el impacto de las políticas implementadas por el gobierno. Se podrían realizar encuestas, focus groups o audiencias públicas donde los ciudadanos puedan compartir sus experiencias, sugerir mejoras y evaluar los resultados de las políticas públicas. La participación ciudadana en la evaluación de políticas garantiza una mayor legitimidad y calidad en la toma de decisiones, al tiempo que empodera a los ciudadanos y fortalece la confianza en el sistema político.';
} else if (this.average >= 0.5 && this.average <= 1.19) {
  this.propuesta3 = 'Esto implica involucrar a los ciudadanos en la toma de decisiones sobre temas como proyectos de infraestructura, desarrollo económico o políticas públicas importantes. Las consultas ciudadanas podrían llevarse a cabo a través de votaciones, encuestas o debates públicos, donde se brinde a los ciudadanos la oportunidad de expresar su opinión y contribuir en la toma de decisiones. Esto garantizaría que las decisiones sean más inclusivas y reflejen las necesidades y preferencias de la ciudadanía. ';
} else if (this.average >= 1.2 && this.average <= 2) {
  this.propuesta3 = 'Esto implica incentivar a los ciudadanos a organizarse de manera independiente y voluntaria para abordar los desafíos de su comunidad. Se podrían crear redes de voluntariado, organizaciones sin fines de lucro y plataformas que faciliten la colaboración entre los ciudadanos interesados en contribuir al bienestar social. El voluntariado basado en la sociedad civil refuerza la autonomía individual y la responsabilidad personal, al tiempo que fortalece los lazos comunitarios y fomenta la solidaridad entre los ciudadanos.';
} else {
  this.propuesta3 = 'Perfil desconocido';
}  

}

ngOnInit(): void {
    
}
}




