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

export type ShowItem = {
  show: ShowInfo
}

export type Show = {
  id: string;
  name: string;
  genres: string[];
  image: string;
  summary: string;
}

export type ShowsValue = {
  searchTerm: string,
  setSearchTerm: (searchTerm: string) => void,
  showList: Show[],
  setShowList: (showList: Show[]) => void  
  isLoading: boolean,
  failure: Nullable<Error>
}

export type Nullable<T> = T | null