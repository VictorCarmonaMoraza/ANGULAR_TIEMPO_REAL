import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
<<<<<<< Updated upstream
=======
import { ChatService } from './services/chat.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
<<<<<<< Updated upstream
    public wsService: WebsocketService
  ) { }
  ngOnInit(): void {
    
=======
    public wsService: WebsocketService,
    public chatService: ChatService
  ) { }

  //Esto pasara cuando la pagina se recarga
  ngOnInit(): void {
    this.chatService.sendMessage('Hola desde angular');
>>>>>>> Stashed changes
  }
}
