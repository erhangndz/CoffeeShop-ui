import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from '../carousel/carousel';
import { About } from '../about/about';

@Component({
  imports: [RouterLink, Carousel, About],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
