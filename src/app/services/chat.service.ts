import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsSerice: WebsocketService
  ) { }

  //Metodo para emitir mensaje
  sendMessage(mensaje: string) {
    const payload = {
      de: 'Victor Manuel Carmona',
      cuerpo: mensaje
    };

    this.wsSerice.emitir('mensaje', payload);
  }

  getMessages(): Observable<any>{
    return this.wsSerice.escuchar('mensaje-nuevo');
  }
}
