// export interface Subtitle {
//   lang: string;
//   url: string;
// }

// export interface Video {
//   id: string;
//   title: string;
//   description: string;
//   sourceUrl: string;
//   thumbnail: string;
//   duration: number; // In seconds
//   subtitles: Subtitle[];
// }

// export interface Chapter {
//   id: string;
//   title: string;
//   order: number;
//   videos: Video[]; 
// }

// export interface Course {
//   id: string;
//   title: string;
//   instructor: string;
//   chapters: Chapter[];
//   totalDuration: number;
// }

export interface VideoPlayerProps {
    videoUrl: string
    title: string
}
