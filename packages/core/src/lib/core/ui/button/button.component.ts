import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, booleanAttribute } from '@angular/core';
import { ButtonAppearance } from './button.type';



@Component({
  selector: 'button[filled-button], button[raised-button], button[outlined-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input({transform: booleanAttribute}) isLoading!: boolean;

  @Input() appearance: ButtonAppearance = 'default';

  @HostBinding('attr.role') role = 'button';

  constructor() { }

  @HostBinding('class')
  get classes() {
    return {
      'core-button-primary': this.appearance == 'primary',
      'core-button-default': this.appearance == 'default',
      'core-button-accent': this.appearance == 'accent',
      'core-button-warn': this.appearance == 'warn'
    }
  }

  ngOnInit() {
    console.log("From custom button");
  }

}
