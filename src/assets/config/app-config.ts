import { InjectionToken } from "@angular/core";

// Although the ApplicationConfig interface plays no role in dependency injection, 
// it supports typing of the configuration object within the class.
export interface ApplicationConfig {
    itemExpandHeight: number;
    toast_duration: number;
    fb_app_id: number;
    fb_app_name: string;
    login_welcome_msg: string;
    login_error_msg: string;
    logout_success_msg: string;
    logout_error_msg: string;
    fechas: Array<string>;
    mensajes: Array<any>;
  }
  
  // Configuration values for our app
  export const MY_CONFIG: ApplicationConfig = {
    itemExpandHeight: 44,
    toast_duration: 4000,
    fb_app_id: 1911041442545688,
    fb_app_name: "El_Cortijo_App",
    login_welcome_msg: "Bienvenido a la App del Cortijo #NuevosViejosAmigos.",
    login_error_msg: "Ocurrió algún error al realizar el login.",
    logout_success_msg: "Gracias, vuelve pronto!",
    logout_error_msg: "Ocurrió algún error al realizar el logout.",
    fechas: [
        "Sabado 16 de diciembre",
        "Viernes 22 de diciembre"
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