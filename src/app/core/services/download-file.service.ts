import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor() {
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], {type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    pwa.close();
    // if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //   alert('Please disable your Pop-up blocker and try again.');
    // }
  }
}
