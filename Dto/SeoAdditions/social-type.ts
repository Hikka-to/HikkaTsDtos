/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export enum SocialType {
    Website = "Website",
    Article = "Article",
    Book = "Book",
    Profile = "Profile",
    VideoOther = "VideoOther",
    VideoMovie = "VideoMovie",
    VideoEpisode = "VideoEpisode",
    VideoTvShow = "VideoTvShow",
    MusicSong = "MusicSong",
    MusicAlbum = "MusicAlbum",
    MusicPlaylist = "MusicPlaylist",
    MusicRadioStation = "MusicRadioStation",
}

export const socialTypeSchema = z.nativeEnum(SocialType);
