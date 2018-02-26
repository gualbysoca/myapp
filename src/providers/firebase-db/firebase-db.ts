import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Base64 } from '@ionic-native/base64';

@Injectable()
export class FirebaseDbProvider {

  private eventos = [
    { 
      nombre: "Jagermeister Night",
      tipo: "público",
      detalles: "JAGERMEISTER NIGHT - 17 de febrero ven a pasar grandes momentos con tus #NuevosViejosAmigos!!<br><br>Los invitamos a disfrutar de la mejor musica\n\n•Ambientes al aire libre\n•Los mejores cocteles<br>•shots de jager 🥃🔥<br><br>Esto y mucho mas solo en esta JAGERMEISTER NIGHT. Reserva tu mesa ya! #NuevosViejosAmigos<br>🔥SÁBADO 17 DE FEBRERO EN #ELCORTIJOPUB🔥<br><br>Telefonos de Contacto para reservas<br><br>El Cortijo Pub - 75468801<br>Alejandro - 70305740<br><br>Ingreso solo con carnet de identidad y mayores de 18 años",
      fecha: "2018-02-16",
      hora_desde: "19:00",
      hora_hasta: "2:30",
      //imagen: this.toBase64("../../assets/imgs/img-temp/25395741_1986106001646489_4858609190696177999_n.jpg"),
      imagen: "file:///storage/emulated/0/Pictures/Instagram/IMG_20180219_170610_043.jpg",
      expanded: false,
      display: true,
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
            disponibilidad: "sold-out",
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
            disponibilidad: "8",
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
            disponibilidad: "4",
            expanded: false,
            costo: 480,
            capmesa: 0,
            capzona: 12,
            mesas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        {
            nombre: "Jardin",
            icono: "leaf",
            color: "grey",
            disponibilidad: "2",
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
      ]
    },
    { 
      nombre: "Cortijo Carnivale 2018 con Los Totora",
      tipo: "público",
      detalles: 'El Cortijo Pub - CARNIVALE 2018 Presenta:<br><br>🎺🎺🎉🎉LOS TOTORA - VIERNES 9 de FEBRERO 🎉🎉🎺🎺 en #ElCortijoPub<br><br>Listos para continuar con la temporada en #ElCortijoPub el mejor boliche de cocha apuesta a artistas internacionales de primer nivel para hacer el mejor carnaval con la mejor musica 🎉🎉 en #ElCortijoPub, tenemos todo para pasar un dia increible, con la presencia de un artista de primera 🎶LOS TOTORA que estara para animar por primera vez en Bolivia con sus exitos \"Márchate Ahora\", que cuenta con más de 80 millones de reproducciones en YouTube. 🎺🎺🎶. Tambien contaremos con la presencia especial de PK2, ambos artistas de talla internacional en un escenario de primer nivel 🍾🍾 una fiesta que no te puedes perder empezamos desde las 15:00 hrs, estaremos junto a Paceña Estacion Carnaval, Fernet Branca, Gin La Republica, Compra tus entradas ya!<br><br>Precio de las Entradas:<br>VIP 150 Bs<br>Camarote 150 Bs<br>Terraza 150 Bs<br>Patio 150 Bs<br>jardin 100 Bs<br><br>Precio de lounges:<br>▪Zona vip: 750 Bs (3 botellas o equivalente a consumo)<br>▪Camarotes: 1000 Bs de consumo (Solo 4 unidades)<br>▪Terraza: 1000 Bs ( solo 2 unidades)<br>Venta de entradas todos los días desde las<br>10:30 - 12:30 hrs OFICINAS<br>14:30 - 17:00 hrs OFICINAS<br>17:00 - 23:00 hrs<br>Telefonos de Contacto<br><br>Para reservas de lounge en VIP, PATIO Y TERRAZA y CAMAROTES :<br>Samu: 75466678<br><br>ZONA JARDIN RESERVAS DE MESAS<br><br>El Cortijo Pub - 75468801<br>Alejandro - 70305740<br><br>🎉🎉🔥VIERNES 9 de FEBRERO en #ElCortijoPub🔥🎉🎉<br><br>Ingreso solo con carnet de identidad y mayores de 18 años',
      fecha: "2018-02-09",
      hora_desde: "15:00",
      hora_hasta: "1:00",
      imagen: "assets/imgs/img-temp/27654507_2013882745535481_3175793173245102305_n.jpg",
      expanded: false,
      display: true,
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
      ]
    }
  ]

  constructor(public http: HttpClient,
              private base64: Base64) {
    console.log('Hello FirebaseDbProvider Provider');
  }

  getEventos(){
    return this.eventos;
  }

  getFechasEventos(){
    console.log(this.eventos['fecha'])
    return this.eventos['fecha'];
  }

  toBase64(item){
    let filePath: string = item;
    this.base64.encodeFile(filePath).then((base64File: string) => {
      alert(base64File);
      console.log(base64File);
      return base64File;
    }, (err) => {
      alert(err);
      console.log(err);
    });
  }



}
