import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';


@Directive({
  selector: '[appFileUploader]'
})
export class FileUploaderDirective {

  constructor() { }


  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    console.log(evt.dataTransfer.files)
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    console.log(evt.dataTransfer.files)
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log(evt.dataTransfer.files)
    this.fileOver = false;
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
