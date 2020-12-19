import { Component, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { MediaType, Audio } from 'src/app/models/my-media';
import { DOWNLOAD_CONTAINER } from 'src/app/shared/config';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, AfterViewInit {

  file;
  audio: any;
  fileUrl = '';
  @Input() mediaType: MediaType = 2;
  items = [];

  constructor(
    private el: ElementRef
  ) {

  }


  ngAfterViewInit(): void {
    this.file = document.getElementById('thefile');
    this.audio = document.getElementById('audio');
    this.file.onchange = this.loadFile();
  }


  ngOnInit() {

  }

  @Input() set FileUrl(url: string) {
    this.fileUrl = url;
  }

  @Input() set Items(items: Audio[]) {
    items.forEach(obj => {
      this.items.push({
        name: obj?.description ?? obj.fileName,
        src: DOWNLOAD_CONTAINER + obj.fileName,
        type: ''
      });
    });

    this.fileUrl = this.items[0].src;
    this.loadFile();
  }

  loadFile() {
    // const files = this.files;
    // this.audio.src = URL.createObjectURL(files[0]);
    console.log(this.audio);

    this.audio.src = this.fileUrl;
    this.audio.crossOrigin = 'anonymous';
    this.audio.load();
    this.audio.play();
    const context = new AudioContext();
    const src = context.createMediaElementSource(this.audio);
    const analyser = context.createAnalyser();

    const canvas: any = document.getElementById('canvas');
    canvas.style.width = '' + window.innerWidth;
    canvas.style.height = '' + window.innerHeight;
    const ctx = canvas.getContext('2d');

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = (canvas.height + 0.5 * canvas.height);

    const barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        const r = barHeight + (25 * (i / bufferLength));
        const g = 250 * (i / bufferLength);
        const b = 50;

        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    // this.audio.play();
    renderFrame();
  }

}
