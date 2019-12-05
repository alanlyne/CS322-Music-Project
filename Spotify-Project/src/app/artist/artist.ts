import { IFollower } from './follower';
import { IImage } from './image';

export interface IArtist{
    genres: string[];
    followers: IFollower;
    images: IImage[];
    name:string;
    popularity: number;
    topSongs: string;
    id: string;
}
