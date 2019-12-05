import { IImage } from '../album/image';

export interface IAlbum {
    name: string;
    total_tracks: number;
    images: IImage[];
}