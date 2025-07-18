import { Component, OnInit, OnDestroy, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highlights-carousel',
  standalone: false,
  templateUrl: './highlights-carousel.html',
  styleUrl: './highlights-carousel.css'
})
export class HighlightsCarousel implements OnInit, OnDestroy {
  images: string[] = [
    'bolo1.png',
    'bolo2.png',
    'bolo3.png',
    'bolo4.png',
    'bolo5.png'
  ];
  currentIndex: number = 0;
  intervalId: any;
carouselItems: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.pauseAutoSlide();
  }

  getImagePath(image: string): string {
    return `/${image}`;
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  pauseAutoSlide(): void {
    clearInterval(this.intervalId);
  }

  resetAutoSlide(): void {
    this.pauseAutoSlide();
    this.startAutoSlide();
  }

 nextSlide(): void {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

prevSlide(): void {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
}


  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  goToProductPage(image: string): void {
    const productSlug = image.replace(/\.[^/.]+$/, '').toLowerCase();
    this.router.navigate(['/produtos', productSlug]);
  }
}
