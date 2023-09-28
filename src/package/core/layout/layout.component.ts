import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  public scroll = (): void => {
    const scrollPosition = window.pageYOffset;
    const scrollButton = document.getElementById('scrollButton') as HTMLElement;
    if (scrollPosition > 250) {
      scrollButton.classList.add('active');
    } else {
      scrollButton.classList.remove('active');
    }
  }

  public scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
