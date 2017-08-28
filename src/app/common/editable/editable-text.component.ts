import { Component } from '@angular/core';
import { EditableComponent } from './editable.component';

@Component({
  selector: 'syndesis-editable-text',
  template: `
    <ng-container *ngIf="!editing">
      <em class="text-muted" *ngIf="!value">
        {{ placeholder }}
      </em>
      <ng-container *ngIf="value">
        {{ value }}
      </ng-container>
      <button type="button" class="btn btn-link" (click)="editing = true">
        <i class="fa fa-pencil" aria-hidden="true" title="Click to edit"></i>
      </button>
    </ng-container>
    <ng-container *ngIf="editing">
      <div class="form-group" [ngClass]="{'has-error': errorMessage}">
        <input #textInput type="text" class="form-control" [ngModel]="value">
        <span class="help-block" *ngIf="errorMessage">{{errorMessage}}</span>
      </div>
      <button class="btn btn-primary" (click)="submit(textInput.value)">Save</button>
      <button class="btn btn-default" (click)="cancel()">Cancel</button>
    </ng-container>
  `,
  styles: [`
    input {
      font-size: inherit;
      height: inherit;
      line-height: inherit;
    }
  `],
})
export class EditableTextComponent extends EditableComponent {
}
