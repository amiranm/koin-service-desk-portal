import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
interface RoI {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ideas-intake',
  templateUrl: './ideas-intake.component.html',
  styleUrl: './ideas-intake.component.scss'
})
export class IdeasIntakeComponent {
  isModalOpen = false;

  htmlContent: string = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    customClasses: [
      {
        name: 'Normal Text',
        class: 'normal-text',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    fonts: [
      {class: 'Normal Text', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    toolbarHiddenButtons: [
      ['undo','redo', 'subscript', 'superscript', 'indent', 'outdent', 'strikeThrough'],
      ['heading', 'fontName'],
      ['underline'],
      ['textColor'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
      ['unlink', 'insertImage', 'video', 'insertVideo'],
      ['insertHorizontalRule', 'removeFormat'],
      ['toggleEditorMode', 'backgroundColor']
    ]
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
