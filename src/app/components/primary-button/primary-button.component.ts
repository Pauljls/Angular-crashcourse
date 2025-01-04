import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  template: `
    <button (click)="handleButtonClick()" class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90 
    flex flex-row space-x-2">
     <div>
     <ng-content selector=[svg]/> 
     </div>
     <div>{{label()}}</div>
    </button>
  `,
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();

  handleButtonClick(){
    this.btnClicked.emit()
  }
  //this.handleButtonClick.emit(5)
}
