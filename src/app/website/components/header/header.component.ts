import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent implements OnInit {

  menuOpen = false;
  currentSlide = 0;
  objetoSeleccionado: any = null; 

  slides = [
    { image: 'assets/images/estacionRoboDK.png', text: 'Estación de RoboDK para el soldado de las herramientas.'},
    { image: 'assets/images/layout.png', text: 'Layout de la estación de RoboDK, además de los alcances del robot.'}, 
    { image: 'assets/images/disposicionPlanta.png', text: 'Disposición en planta de la simulación de FlexSim.'}
  ]

  objetos = [
    {
      titulo: 'Cabeza de pala', 
      imagen: 'assets/images/pala.png', 
      descripcion: 'Es una herramienta básica de jardinería, formada por una lámina metálica, levemente curvada y un mango de madera para manejarla. Se usa para cavar la tierra, excavar hoyos de plantación o trasladar el sustrato.'
    },
    {
      titulo: 'Cabeza de azada', 
      imagen: 'assets/images/azada.png', 
      descripcion: 'Está formada por un mango, normalmente de madera, y una hoja de acero con el borde afilado. Se utiliza para cavar agujeros de plantación, mover la tierra para nivelar el terreno o para colocarla alrededor de las plantas, formando un alcorque y también para quitar las malas hierbas.'
    },
    {
      titulo: 'Cabeza de rastrillo',
      imagen: 'assets/images/rastrillo.png', 
      descripcion: 'En agricultura se usa para recoger hojas, heno y todo tipo de restos vegetales. En jardinería se emplea para aflojar el suelo, nivelar o recoger las hojas secas. Existen rastrillos de mano, con las púas más rígidas, para remover restos vegetales, airear el suelo o colocar la tierra.'
    }
  ]

  tecnologias = [
    { image: 'assets/images/arduino.png', text: 'Arduino IDE'}, 
    { image: 'assets/images/canva.png', text: 'Canva'}, 
    { image: 'assets/images/flexsim.png', text: 'FlexSim'}, 
    { image: 'assets/images/notion.png', text: 'Notion'}, 
    { image: 'assets/images/powerPoint.png', text: 'PowerPoint'}, 
    { image: 'assets/images/python.png', text: 'Python'}, 
    { image: 'assets/images/robodk.png', text: 'RoboDK'}
  ]

  robots = [
    { 
      image: 'assets/images/kuka.png',
      title: 'KUKA KP1 h250', 
      description: 'Robot usado para sujetar el mango de las herramientas en el proceso de la soldadura. Además, también acompaña a la misma.',
      documentation: 'assets/files/documentacion_robot_kuka.pdf'
    },
    {
      image: 'assets/images/abb.jpg', 
      title: 'ABB IRB 2600 id-15', 
      description: 'Robot antropomórfico para realizar la soldadura de la cabeza de la herramienta con su respectivo mango.',
      documentation: 'assets/files/documentacion_robot_abb.pdf'
    },
    {
      image: 'assets/images/agv.png', 
      title: 'AGV OMRON250',
      description: 'Robot autónomo guiado (AGV) usado para el transporte de las herramientas.',
      documentation: 'assets/files/documentacion_agv.pdf'
    }
  ]

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 4000); //Change every 4 seconds
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  handleLinkClick() {
    this.menuOpen = false;
  }

  mostrarObjeto(obj: any): void {
    this.objetoSeleccionado = obj;
  }

  cerrarModal(): void {
    this.objetoSeleccionado = null;
  }
}