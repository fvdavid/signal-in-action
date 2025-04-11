import { Component, computed, linkedSignal, ResourceStatus, signal } from '@angular/core';
import { chatConnection } from '../utils/chat-connection';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from '../directive/focus.directive';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, FocusDirective, JsonPipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  ResourceStatus = ResourceStatus;

  userName = signal('');
  chat = chatConnection(
    'ws://localhost:6502',
    this.userName
  );
  messages = computed(() => this.chat.resource.value() ?? []);

  userNameInField = linkedSignal(() => this.chat.acceptedUserName());
  currentMessage = signal<string>('');

  send() {
    if(this.currentMessage()) {
      this.chat.send(this.currentMessage());
      this.currentMessage.set('');
    }
  }

  join() {
    if(this.userNameInField()) {
      this.userName.set(this.userNameInField());
    }
  }

}
