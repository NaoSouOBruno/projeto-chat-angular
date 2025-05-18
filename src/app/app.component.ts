import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensagens: string[] = [];
  mensagem = '';

  enviarMensagem() {
    this.mensagens.push(this.mensagem);
    this.mensagem = '';
    console.log(this.mensagens);
  }
}
