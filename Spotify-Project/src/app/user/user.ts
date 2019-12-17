import { IImage } from '../artist/image';

export interface IUser{
    country: string;
    display_name: string;
    images: IImage[];
}