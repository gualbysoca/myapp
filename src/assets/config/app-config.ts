import { InjectionToken } from "@angular/core";

// Although the ApplicationConfig interface plays no role in dependency injection, 
// it supports typing of the configuration object within the class.
export interface ApplicationConfig {
    zonas: Array<any>;
    itemExpandHeight: number;
    FB_APP_ID: number;
    mensajes: Array<any>;
  }
  
  // Configuration values for our app
  export const MY_CONFIG: ApplicationConfig = {
    itemExpandHeight: 44,
    FB_APP_ID: 349087275553642,
    zonas: [
        {
            nombre: "VIP Lounge",
            icono: "ribbon",
            color: "grey",
            disponibilidad: "sold-out",
            expanded: false,
            height:300,
            costo: 700,
            capmesa: 15,
            capzona: 10,
            mesas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        {
            nombre: "VIP Mesa",
            icono: "star",
            color: "grey",
            disponibilidad: "2",
            expanded: false,
            costo: 480,
            capmesa: 10,
            capzona: 10,
            mesas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        {
            nombre: "Camarotes",
            icono: "glasses",
            color: "grey",
            disponibilidad: "7",
            expanded: false,
            costo: 1100,
            capmesa: 0,
            capzona: 4,
            mesas: ['1', '2', '3', '4']
        },
        {
            nombre: "Patio",
            icono: "beer",
            color: "grey",
            disponibilidad: "1",
            expanded: false,
            costo: 480,
            capmesa: 0,
            capzona: 17,
            mesas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']
        },
        {
            nombre: "Jardin",
            icono: "leaf",
            color: "grey",
            disponibilidad: "10",
            expanded: false,
            costo: 480,
            capmesa: 0,
            capzona: 10,
            mesas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        {
            nombre: "Internacional Interior",
            icono: "log-in",
            color: "grey",
            disponibilidad: "sold-out",
            expanded: false,
            costo: 250,
            capmesa: 0,
            capzona: 5,
            mesas: ['1', '2', '3', '4', '5']
        },
        {
            nombre: "Terraza",
            icono: "cube",
            color: "grey",
            disponibilidad: "sold-out",
            expanded: false,
            costo: 2150,
            capmesa: 50,
            capzona: 1,
            mesas: ['1']
        },
        {
            nombre: "Zona Deportiva",
            icono: "football",
            color: "grey",
            disponibilidad: "sold-out",
            expanded: false,
            costo: 480,
            capmesa: 0,
            capzona: 1,
            mesas: ['1']
        }
    ],
    mensajes: [
        {
            tipo: 'pendiente', 
            msj: 'Te haremos saber pronto si tu reserva fue pre-aprobada.'
        },
        {
            tipo: 'preaprobada', 
            msj: 'Tu solicitud fue pre-aprobada. Por favor sigue los pasos indicados abajo para completar tu reserva.'
        },
        {
            tipo: 'pagada', 
            msj: 'Gracias por enviarnos tu comprobante. Verificaremos tu pago y te confirmaremos tu reserva.'
        },
        {
            tipo: 'reservada', 
            msj: 'Tu reserva fue completada!'
        },
        {
            tipo: 'cancelada', 
            msj: 'Esta reservación fue cancelada por el cliente.'
        },
        {
            tipo: 'rechazada', 
            msj: 'Esta reservación fue rechazada por el local.'
        },
        {
            tipo: 'caducada', 
            msj: 'Reserva caducada.'
        }
    ]
  };
  
  // Create a config token to avoid naming conflicts
  export const MY_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');