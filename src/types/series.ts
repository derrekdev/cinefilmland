interface seriesProps {
  videoType?: "series";
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: genreProps[] | number[];
  id: number;
  name: string;
  // original_language: string;
  original_country: string[];
  // original_title: string;
  original_name: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  // release_date: string | Date;
  // title: string;
  // video: boolean;
  vote_average: number;
  vote_count: number;
  runtime?: number;
  // belongs_to_collection?: collectionProps;
}
