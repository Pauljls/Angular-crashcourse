import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  template: `
    <button (click)="handleButtonClick()" class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90">
      {{label()}}
    </button>
  `,
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();

  handleButtonClick(){
    this.btnClicked.emit()
    alert(`acabas de dar un click en `+ this.label())
  }
  //this.handleButtonClick.emit(5)
}
