import { MySignals } from './../../shared/services/my-signals';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emoji-modal',
  templateUrl: './emoji-modal.component.html',
  styleUrls: ['./emoji-modal.component.scss'],
})
export class EmojiModalComponent implements OnInit {
  char;
  @Output() emoji = new EventEmitter<string>();

  constructor(
    private signals: MySignals
  ) { }

  ngOnInit() { }

  addEmoji($evt) {
    console.log($evt);
    this.char = $evt.emoji.native;
    this.emoji.emit($evt.emoji.native);
    this.signals.announceEmojiChar($evt.emoji.native ); // broadcast all listeners
  }

  close() {
    this.signals.announceCloseModal('emoji');
  }

}
