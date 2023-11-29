import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Socket
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './componets/footer/footer.component';
import { ChatComponent } from './componets/chat/chat.component';


//Formularios
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
