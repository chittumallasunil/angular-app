import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Welcome to @programmingwithsunil';
  username:String ='Sunil';
  isButtonDisabled =true;
  userInput = ''

  buttonClick(event:any){
    console.log("Button Clicked")
    if(event){
        console.log(event.target);
    }
  }
}
