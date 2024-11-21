import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.scss',
})
export class TopNavigationComponent {
  @Input() title!: string;
}
