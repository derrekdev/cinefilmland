type movieProps = {
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: genreProps[] | number[];
  id: number;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date: string | Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime?: number;
  belongs_to_collection?: collectionProps;
};

type collectionProps = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type genreProps = {
  id: number;
  name: string;
};

type cast = {
  id: number;
  cast: castActorProps[];
  crew: castCrewProps[];
};

type castDefaultProps = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department?: string;
  name: string;
  original_name: string;
  popularity: number;
  credit_id: string;
  profile_path?: string;
};

type castActorProps = {
  cast_id: number;
  character: string;
  order: number;
} & castDefaultProps;

type castCrewProps = {
  department: string;
  job: string;
} & castDefaultProps;
