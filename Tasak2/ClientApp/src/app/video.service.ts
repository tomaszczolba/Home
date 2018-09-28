import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  configUrl = 'api/Video/List';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
