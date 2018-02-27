import { Injectable } from '@angular/core';
//import { Base64 } from '@ionic-native/base64';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseDbProvider {
  private reservas = [
    {
      id_cliente: 'gmm080883',
      fecha: '16/12/2017',
      zona: 'VIP Lounge',
      mesa: '1',
      costo: '700',
      capacidad: '15',
      estado: 'pendiente'//pendiente, preaprobada, pagada, reservada, cancelada, rechazada
    },
    {
      id_cliente: 'gmm080883',
      fecha: '14/08/2017',
      zona: 'Patio',
      mesa: '9',
      costo: '480',
      capacidad: '0',
      estado: 'preaprobada'
    },
    {
      id_cliente: 'gmm080883',
      fecha: '08/07/2017',
      zona: 'Internacional Interior',
      mesa: '8',
      costo: '250',
      capacidad: '0',
      estado: 'pagada'
    },
    {
      id_cliente: 'gmm080883',
      fecha: '08/07/2017',
      zona: 'Internacional Interior',
      mesa: '8',
      costo: '250',
      capacidad: '0',
      estado: 'reservada'
    },
    {
      id_cliente: 'gmm080883',
      fecha: '08/07/2017',
      zona: 'Internacional Interior',
      mesa: '8',
      costo: '250',
      capacidad: '0',
      estado: 'cancelada'
    },
    {
      id_cliente: 'gmm080883',
      fecha: '08/07/2017',
      zona: 'Internacional Interior',
      mesa: '8',
      costo: '250',
      capacidad: '0',
      estado: 'rechazada'
    },
    {
      id_cliente: 'gmm080883',
      fecha: '08/07/2017',
      zona: 'Internacional Interior',
      mesa: '8',
      costo: '250',
      capacidad: '0',
      estado: 'caducada'
    }
  ];

  private eventos = [
    { 
      nombre: "Jagermeister Night",
      tipo: "público",
      detalles: "JAGERMEISTER NIGHT - 17 de febrero ven a pasar grandes momentos con tus #NuevosViejosAmigos!!\n\nLos invitamos a disfrutar de la mejor musica\n\n•Ambientes al aire libre\n•Los mejores cocteles\n•shots de jager 🥃🔥\n\nEsto y mucho mas solo en esta JAGERMEISTER NIGHT. Reserva tu mesa ya! #NuevosViejosAmigos<br>🔥SÁBADO 17 DE FEBRERO EN #ELCORTIJOPUB🔥\n\nTelefonos de Contacto para reservas\n\nEl Cortijo Pub - 75468801\nAlejandro - 70305740\n\nIngreso solo con carnet de identidad y mayores de 18 años",
      fecha: "2018-02-16",
      hora_desde: "19:00",
      hora_hasta: "2:30",
      //imagen: this.toBase64("../../assets/imgs/img-temp/25395741_1986106001646489_4858609190696177999_n.jpg"),
      //imagen: "file:///storage/emulated/0/Pictures/Instagram/IMG_20180219_170610_043.jpg",
      imagen: "https://scontent.flim2-1.fna.fbcdn.net/v/t1.0-9/25395741_1986106001646489_4858609190696177999_n.jpg?oh=2346df55b883585ca1b7c3bd943288c0&oe=5B07A702",
      expanded: false,
      display: true,
      urlfacebook: "https://www.facebook.com/events/508374759549133/",
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
      detalles: 'El Cortijo Pub - CARNIVALE 2018 Presenta:\n\n🎺🎺🎉🎉LOS TOTORA - VIERNES 9 de FEBRERO 🎉🎉🎺🎺 en #ElCortijoPub\n\nListos para continuar con la temporada en #ElCortijoPub el mejor boliche de cocha apuesta a artistas internacionales de primer nivel para hacer el mejor carnaval con la mejor musica 🎉🎉 en #ElCortijoPub, tenemos todo para pasar un dia increible, con la presencia de un artista de primera 🎶LOS TOTORA que estara para animar por primera vez en Bolivia con sus exitos \"Márchate Ahora\", que cuenta con más de 80 millones de reproducciones en YouTube. 🎺🎺🎶. Tambien contaremos con la presencia especial de PK2, ambos artistas de talla internacional en un escenario de primer nivel 🍾🍾 una fiesta que no te puedes perder empezamos desde las 15:00 hrs, estaremos junto a Paceña Estacion Carnaval, Fernet Branca, Gin La Republica, Compra tus entradas ya!\n\nPrecio de las Entradas:\nVIP 150 Bs\nCamarote 150 Bs\nTerraza 150 Bs\nPatio 150 Bs\njardin 100 Bs\n\nPrecio de lounges:\n▪Zona vip: 750 Bs (3 botellas o equivalente a consumo)\n▪Camarotes: 1000 Bs de consumo (Solo 4 unidades)\n▪Terraza: 1000 Bs ( solo 2 unidades)\nVenta de entradas todos los días desde las\n10:30 - 12:30 hrs OFICINAS\n14:30 - 17:00 hrs OFICINAS\n17:00 - 23:00 hrs\nTelefonos de Contacto\n\nPara reservas de lounge en VIP, PATIO Y TERRAZA y CAMAROTES :\nSamu: 75466678\n\nZONA JARDIN RESERVAS DE MESAS\n\nEl Cortijo Pub - 75468801\nAlejandro - 70305740\n\n🎉🎉🔥VIERNES 9 de FEBRERO en #ElCortijoPub🔥🎉🎉\n\nIngreso solo con carnet de identidad y mayores de 18 años',
      fecha: "2018-02-09",
      hora_desde: "15:00",
      hora_hasta: "1:00",
      //imagen: "assets/imgs/img-temp/27654507_2013882745535481_3175793173245102305_n.jpg",
      imagen: "https://scontent.flim2-1.fna.fbcdn.net/v/t1.0-9/27654507_2013882745535481_3175793173245102305_n.jpg?oh=3b0022c3db33e2c8db220a79e67f0765&oe=5B474080",
      expanded: false,
      display: true,
      urlfacebook: "https://www.facebook.com/events/2006394499646605/",
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
  ];

  constructor(//private base64: Base64,
              public afd: AngularFireDatabase,
            ) {
    console.log('Hello FirebaseDbProvider Provider');
  }

  getEventos(){
    return this.eventos;
    //console.log(this.afd.list('/eventos/'));
    //return this.afd.list('/eventos/');
  }

  getReservas(id){
    return this.reservas;
  }

  addEvento(evento){
    this.afd.list('/eventos/').push(evento);
  }

  removeEvento(id){
    this.afd.list('/eventos/').remove(id);
  }

  getFechasEventos(){ //Creo que no esta en uso
    console.log(this.eventos['fecha'])
    return this.eventos['fecha'];
  }

  /*toBase64(item){
    let filePath: string = item;
    this.base64.encodeFile(filePath).then((base64File: string) => {
      alert(base64File);
      console.log(base64File);
      return base64File;
    }, (err) => {
      alert(err);
      console.log(err);
    });
  }*/



}
