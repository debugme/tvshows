export type Nullable<T> = T | null

export type ResponseValue = {
  isLoading: boolean,
  failure: Nullable<Error>  
}

export type ShowItem = {
  show: ShowInfo
}

export type ShowValue = ResponseValue & {
  searchTerm: string,
  setSearchTerm: (searchTerm: string) => void,
  showList: Show[],
  setShowList: (showList: Show[]) => void  
}

export type ShowInfo = {
  show: {
    id: string;
    name: string;
    genres: string[];
    image: {
      medium: string;
    }
    summary: string;
  }
}

export type Show = {
  id: string;
  name: string;
  genres: string[];
  image: string;
  summary: string;
}

export type CastValue = ResponseValue & {
  castList: Cast[]
  setCastList: (castList: Cast[]) => void
}

export type CastInfo = {
  person: {
    id: string,
    name: string,
    image: {
      medium: string
    }
  }
}

export type Cast = {
  id: string,
  name: string,
  image: string
}

export type SeasonValue = ResponseValue & {
  seasonList: Season[]
  setSeasonList: (seasonList: Season[]) => void
}

export type SeasonInfo = {
  id: string,
  number: number,
  image?: {
    medium: string
  }
}

export type Season = {
  id: string
  name: string,
  image: string
}
