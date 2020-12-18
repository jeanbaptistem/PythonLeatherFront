import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


const url = "http://localhost:8000/images"

const HEADERS = [{ name: "Access-Control-Allow-Credentials", value: "true" },
{ name: "Access-Control-Allow-Headers", value: "Origin, X-Requested-With, Content-Type, Accept" },
{ name: "Access-Control-Allow-Methods", value: "GET,PUT,POST,DELETE" }]

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;

  constructor() {
    this.uploader = new FileUploader({
      url,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      headers: HEADERS,
      additionalParameter: { withCredentials: true },
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe(res => {
      this.response = res;
      console.log(res)
    });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  uploadAll() {
    console.log(this.uploader.queue)
  }


  uploadItem(item: File) {
    item.arrayBuffer().then(buffer => {
      let array = new Uint8Array(buffer);
      let binaryString = String.fromCharCode.apply(null, array);
    })


  }

}
