export enum ResourceType {
  WebPages = <any> 'web_pages',
  Apis = <any> 'apis',
  Datasets = <any> 'datasets',
  Notebooks = <any> 'notebooks'
}

export interface SearchFormData extends FormData {
  query?: string,
  resource_type?: ResourceType,
}

export interface SearchResult {
  resource_type: ResourceType;
  title: string;
  description: string;
  url: string;
  details: SearchResultNS.DetailsWebPages | SearchResultNS.DetailsApis | SearchResultNS.DetailsDatasets | SearchResultNS.DetailsNotebooks;
}

export namespace SearchResultNS {
  export interface DetailsWebPages {
    researchInfrastructure?: string;
  }

  export interface DetailsApis {
  }

  export interface DetailsDatasets {
    repository?: string;
  }

  export interface DetailsNotebooks {
    repository?: string;
  }
}
