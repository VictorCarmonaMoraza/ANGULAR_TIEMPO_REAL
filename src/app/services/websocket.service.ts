import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {

    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }


  emitir(evento: string, payload?: any, callback?: Function) {

    //Emitimos o disparamos un evento hacia el servidor
    this.socket.emit(evento, payload, callback);
  }

  //Escuchar cualquier evento del servidor
  escuchar(evento: string){
    return this.socket.fromEvent(evento);
  }
}
