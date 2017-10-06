import { Injectable } from '@angular/core';

@Injectable()
export class BD {
    cardsBD = [
        {
          img: "assets/img/app/servicos.jpg",
          title: "Serviços",
          subtitle: "41 opcoes"
        },
        {
          img: "assets/img/app/calendario.jpg",
          title: "Agendar",
          subtitle: ""
        },
        {
          img: "assets/img/app/sobrenos.jpg",
          title: "Sobre Nos",
          subtitle: ""
        },
    ];
}

export var fabBD = [
    {
        logo:"log-out",
        action: "logout",
        notHidden: true
    },
    {
        logo:"settings",
        action: "setting",
        notHidden: true
    },
    {
        logo:"add",
        action: "add",
        notHidden: false
    }
];