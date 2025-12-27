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
    {name: '3D Renderer', src: 'assets/images/projects/3Drenderer.png', caption: '3D Renderer of Cube and Bulbasaur', description: 'I built a custom 3D renderer in C++ using SFML that renders triangle meshes loaded from OBJ files entirely from scratch. The renderer implements a full software rendering pipeline, including 3D transformations, projection to screen space, and triangle rasterization, without relying on any external graphics APIs. This project gave me hands-on experience with linear algebra, coordinate systems, and the fundamentals of how modern 3D engines work under the hood.'},
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
