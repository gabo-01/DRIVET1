import { Component } from '@angular/core';
import { AuthService } from '../servicios/firebase/auth.service';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';
import * as moment from 'moment';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent {
  chartData: any;

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getcarr().subscribe(
      data => {
        const carros: any[] = data; // Array de carros

        const marcas: string[] = data.map((item: any) => item.Marca); // Reemplaza 'marca' con 'Marca' si así se llaman las propiedades en tus objetos
    const precios: number[] = data.map((item: any) => item.precio); // Reemplaza 'precio' con 'Precio' si así se llaman las propiedades en tus objetos

        this.chartData = {
          labels: marcas,
          datasets: [
            {
              label: 'Datos de Firebase',
              data: precios,
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1
            }
          ]
        };

        const ctx = document.getElementById('myChart');
        if (ctx instanceof HTMLCanvasElement) {
          const context = ctx.getContext('2d');
          if (context) {
            new Chart(context, {
              type: 'bar',
              data: this.chartData,
              options: {
                responsive: true,
                scales: {
                  x: {
                    display: true, // Muestra la escala en el eje x
                    title: {
                      display: true,
                      text: 'Marca', // Título del eje x
                    },
                  },
                  y: {
                    display: true, // Muestra la escala en el eje y
                    title: {
                      display: true,
                      text: 'Precio', // Título del eje y
                    },
                  },
                },
                plugins: {
                  title: {
                    display: true,
                    text: 'Carros', // Título de la gráfica
                  },
                }
              }
            });
          }
        }
      },
      error => {
        console.error('Error al obtener los datos de Firebase', error);
      }
    );



  
    this.userService.getreservas().subscribe(
      data => {
        const usuarios: any[] = data; // Array de carros
        const Nombre: string[] = data.map((item: any) => item.Nombre);
        const fechasI: Date[] = data.map((item: any) => new Date(item.FI));
        const fechasE: Date[] = data.map((item: any) => new Date(item.FE));
    
        // Construir el array de datos en el formato adecuado
        const datos = fechasI.map((_, index) => ({
          x: Nombre[index],
          y: { t: fechasI[index], t2: fechasE[index] }
        }));
    
        this.chartData = {
          datasets: [
            {
              label: 'Datos de Firebase',
              data: datos,
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1
            }
          ]
        };
    
        const ctx = document.getElementById('myChart2');
        if (ctx instanceof HTMLCanvasElement) {
          const context = ctx.getContext('2d');
          if (context) {
            moment.locale('es'); // Configurar el idioma para las fechas
    
            new Chart(context, {
              type: 'bar',
              data: this.chartData,
              options: {
                responsive: true,
                scales: {
                  x: {
                    display: true,
                    title: {
                      display: true,
                      text: 'Nombre',
                    },
                  },
                  y: {
                    display: true,
                    title: {
                      display: true,
                      text: 'Fechas',
                    },
                    type: 'time',
                    time: {
                      unit: 'day',
                      displayFormats: {
                        day: 'MMM D, YYYY'
                      }
                    },
                    adapters: {
                      date: {
                        locale: moment.locale('es') // Configurar el idioma para las fechas
                      }
                    }
                  },
                },
                plugins: {
                  title: {
                    display: true,
                    text: 'RESERVAS',
                  },
                }
              }
            });
          }
        }
      },
      error => {
        console.error('Error al obtener los datos de Firebase', error);
      }
    );
}
}
