import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, booleanAttribute } from '@angular/core';

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

  @HostBinding('attr.role') role = 'button';

  constructor() { }

  ngOnInit() {
    console.log("From custom button");
  }

}
