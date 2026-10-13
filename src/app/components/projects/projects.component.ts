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
    {name: 'CHIP-8 Emulator', src: 'assets/images/projects/chip8.png', caption: 'Pong running alongside the live instruction and register debugger', description: 'I wrote a CHIP-8 emulator in C++ that implements the full 35-opcode instruction set, including the 4KB memory map, 16 general purpose registers, the index register, the call stack, delay and sound timers, the built-in hexadecimal font set, and the 16-key hex keypad. Each cycle fetches, decodes, and dispatches an opcode against the emulated hardware, and sprites are XOR-drawn into a 64x32 framebuffer with collision detection. I rendered the display with SFML and built a debugging interface around it that streams the most recent opcodes and the live register state next to the game, which made tracing instruction-level bugs far easier. It runs commercial ROMs such as Pong at full speed and taught me a great deal about low-level system architecture, bitwise operations, and emulation timing.'},
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
