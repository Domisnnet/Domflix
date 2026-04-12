import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class AppCardComponent {
  constructor(private router: Router) {}

  onProfileClick(profile: { name: string; imgSrc: string }) {
    localStorage.setItem('perfilAtivoNome', profile.name);
    localStorage.setItem('perfilAtivoImagem', profile.imgSrc);
    this.router.navigate(['/catalogo']);
  }
}