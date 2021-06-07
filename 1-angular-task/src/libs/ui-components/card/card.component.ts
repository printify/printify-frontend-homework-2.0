import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Blueprint } from '../../../app/models/blueprint';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() bluerprint: Blueprint;
  @ContentChild('card', { static: false }) tmp: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
