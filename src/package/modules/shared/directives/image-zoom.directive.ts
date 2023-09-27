import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageZoom]'
})
export class ImageZoomDirective {
  @Input() zoomFactor = 1.5;
  @Input() lensSize = 200;

  private lens!: HTMLDivElement;

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const pos = this.getCursorPos(event);
    const lensStyle = this.lens.style;
    const copyStyle = this.el.nativeElement.querySelector('.zoomed-image').style;

    lensStyle.left = `calc(${pos.x}px - ${this.lensSize / 2}px)`;
    lensStyle.top = `calc(${pos.y}px - ${this.lensSize / 2}px)`;
    copyStyle.left = `calc(-${pos.x - this.el.nativeElement.offsetLeft}px + ${(this.lensSize / this.zoomFactor) / 2}px)`;
    copyStyle.top = `calc(-${pos.y - this.el.nativeElement.offsetTop}px + ${(this.lensSize / this.zoomFactor) / 2}px)`;
  }

  private getCursorPos(event: MouseEvent) {
    const x = event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
    const y = event.pageY || (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
    return { x, y };
  }

  ngAfterViewInit() {
    const copy = this.el.nativeElement.cloneNode(true);
    copy.classList.add('zoomed-image');
    copy.style.zoom = `${this.zoomFactor}`;
    copy.style.width = `${this.el.nativeElement.offsetWidth * this.zoomFactor}px`;
    copy.style.height = `${this.el.nativeElement.offsetHeight * this.zoomFactor}px`;
    copy.style.position = 'absolute';

    this.lens = document.createElement('div');
    this.lens.id = 'lens';
    this.lens.style.width = `${this.lensSize}px`;
    this.lens.style.height = `${this.lensSize}px`;

    this.el.nativeElement.appendChild(this.lens);
    this.el.nativeElement.appendChild(copy);
  }
}
