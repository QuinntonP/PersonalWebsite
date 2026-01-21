import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Slide = {
  name: string;
  src: string;
  caption: string;
  description: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  slideIndex = 0;

  slides: Slide[] = [
    {name: 'Chess', src: 'assets/images/projects/chess-dark.png', caption: '', description: 'I built a fully functional chess engine in Java completely from the ground up, focusing on both correctness and performance. The engine uses bitboard representations and low-level bitwise operations to efficiently generate and evaluate legal moves, allowing it to calculate hundreds of thousands of positions per second. I implemented full rule support including castling, en passant, pawn promotion, and check/checkmate detection, along with a recursive search algorithm to evaluate positions. Throughout development, I prioritized clean architecture, fast move generation, and careful state management to ensure accuracy and speed during deep searches. '},
    {name: '3D Renderer / Game engine', src: 'assets/images/projects/3Drenderer.png', caption: 'Terrain generation created with fragment perlin noise', description: 'I built a 3D game engine in C++ using modern OpenGL, featuring real-time rendering with GLSL shaders, dynamic lighting, and atmospheric effects. The engine includes procedural terrain generation with Perlin noise, intelligent object placement based on terrain properties, and a free-flight 6DOF camera system. I also implemented support for loading 3D models, multi-texture rendering, and efficient mesh batching. This project strengthened my understanding of real-time graphics, 3D math, and engine design fundamentals.'},
  ];

  showSlide(n: number) {
    const len = this.slides.length;
    this.slideIndex = (n + len) % len; // wraps both directions
    
  }

  next() {
    this.showSlide(this.slideIndex + 1);
  }

  prev() {
    this.showSlide(this.slideIndex - 1);
  }
}
