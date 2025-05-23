import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, RouterModule, ToastModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']    
})
export class AppComponent {
  title = 'feedback-app-frontend';
}
