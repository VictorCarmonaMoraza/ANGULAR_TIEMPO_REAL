import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {


  texto: string = '';
  mensajesSubscription: Subscription = new Subscription();

  constructor(
    public chatService: ChatService
  ) { }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  ngOnInit() {
    this.mensajesSubscription = this.chatService.getMessages()
      .subscribe(msg => {
        console.log(msg);
      });
  }

  enviar() {
    console.log(this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
