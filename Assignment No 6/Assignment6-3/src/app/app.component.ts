import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template:`
  <input type="text">
  <label class="label">Marvellous Infosytems</label>
  `,
  styles: `
    .label
    {
      color: blue;
      font-size:50px;
      margin-left:200px;
    }`
}
)
export class AppComponent {
  title = 'Assignment6-No-3';
}
