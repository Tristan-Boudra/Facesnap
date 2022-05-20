import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snap!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Lune';
    this.description = 'La Lune est le satellite naturelle de la Terre';
    this.createdDate = new Date();
    this.snap = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }
}
