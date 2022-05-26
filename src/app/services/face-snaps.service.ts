import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      title: 'Lune', 
      description: 'La Lune est le satellite naturelle de la Terre',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snap: 1,
      location: 'Paris'
    },
    {
      title: 'Lune', 
      description: 'La Lune est le satellite naturelle de la Terre',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snap: 9,
      location: 'Lyon'
    },
    {
      title: 'Lune', 
      description: 'La Lune est le satellite naturelle de la Terre',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snap: 10,
    },
  ]
}