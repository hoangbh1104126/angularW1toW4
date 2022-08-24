import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  TemplateRef,
  ContentChild,
} from '@angular/core';
import { TabGroupComponent } from './tab-group.component';
import { TestTabContentDirective } from '../testTabContent.directive';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [''],
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @ViewChild(TemplateRef) implicitBody!: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}

  @ContentChild(TestTabContentDirective, { read: TemplateRef }) explicitBody: TemplateRef<unknown>;

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }

  ngOnInit() {
    this.tabGroup.addTabPanel(this);
    console.log('Tab ' + this.title + ' create');
  }
  ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
    console.log('Tab ' + this.title + ' destroy');
  }
}
