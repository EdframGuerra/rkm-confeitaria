import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightsCarouselInterface } from '../../../models/highlights.carouse.iInterface';

@Component({
  selector: 'app-highlights-carousel',
  standalone: false,
  templateUrl: './highlights.carousel.html',
  styleUrl: './highlights.carousel.css'
})
export class HighlightsCarousel implements OnInit, OnDestroy {

  images:HighlightsCarouselInterface[]= [
    {url:'bolo1.png',alt:'Bolo confeitado'},
    {url:'bolo2.png',alt:'Bolo confeitado'},
    {url:'bolo3.png',alt:'Bolo confeitado'},
    {url:'bolo4.png',alt:'Bolo confeitado'},
    {url:'bolo5.png',alt:'Bolo confeitado'},  ];
  currentIndex: number = 0;
  private intervalId: any;
  carouselItems: any;
   trackByFn(index: number, item: HighlightsCarouselInterface): string {
    return item.url;
  }

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
