import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(private videoService: VideoService) {
    this.showVideoList()
  }

  ngOnInit() {
  }

  videoList = [
    new Video("aaa","dupa")
    ];

  showVideoList() {
    this.videoService.getConfig()
      .subscribe((resp:any )=>
        this.videoList = resp.map(video => {
          return new Video(video.name, video.path)
        })
      );
  }

}

class Video {
  constructor(Name, Path) {
    this.Name = Name;
    this.Path = Path;
  }

  Path: string;
  Name: string;
}
