export enum ResourceType {
  All = <any> 'all',
  WebPages = <any> 'web_pages',
  Apis = <any> 'apis',
  Datasets = <any> 'datasets',
  Notebooks = <any> 'notebooks'
}

export interface SearchFormData {
  q?: string,
  resourceType?: ResourceType,
}

export interface SearchResult {
  resource_type: string;
  title: string;
  description: string;
  url: string;
  details: SearchResultNS.DetailsWebPages | SearchResultNS.DetailsApis | SearchResultNS.DetailsDatasets | SearchResultNS.DetailsNotebooks;
}

export namespace SearchResultNS {
  export interface DetailsWebPages {
    research_infrastructure?: string;
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
