import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template:`
    <button (click)="this.btnClicked.emit()" class="text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-gray-200">
      {{label()}}
    </button>
  `,
  styles: ''
})
export class ButtonComponent {

  label=input('')
  btnClicked = output()

}
