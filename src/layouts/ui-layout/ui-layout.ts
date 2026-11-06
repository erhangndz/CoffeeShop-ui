import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-ui-layout',
  styleUrl: './ui-layout.css',
  templateUrl: './ui-layout.html',
})
export class UiLayout {}
