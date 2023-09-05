"use client";

import React, {useEffect, useState} from "react";
import {clsx} from 'clsx';

import { ResourceType, SearchFormData, SearchResult } from "@/_types/search";

import SearchTitle from "@/components/ui/search-title";
import SearchForm from "@/components/ui/search-form";
import SearchResults from "@/components/ui/search-results";

type Props = {
  showResults: boolean,
}

const Search: React.FC<Props> = (props) => {

  const [searchFormData, setSearchFormData] = useState<SearchFormData>({})
  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([])
  const [resultsLoading, setResultsLoading] = useState(false)

  useEffect(
    () => {
      setResultsLoading(true)
      get_search_results(searchFormData)
        .then(setSearchResults)
        .then(() => {setResultsLoading(false)})
    },
    [searchFormData])

  async function get_search_results(searchFormData: SearchFormData) {
    if (!searchFormData.q) {
      return []
    }
    const resourceTypeIsAll = (searchFormData.resourceType === 'all' as unknown as ResourceType)
    const url = `/api/search${resourceTypeIsAll ? '' : `/${searchFormData.resourceType}`}?q=${searchFormData.q}`
    const res = await fetch(url)
    return res.json()
  }


  return (
    <div className="min-w-full">

      <div className={clsx(
        "flex",
        props.showResults?
          "flex-row justify-start pl-5 pr-16 py-5 space-x-5":
          "flex-col items-center p-16 space-y-20"
      )}>
        <SearchTitle compact={props.showResults}/>
        <SearchForm compact={props.showResults} setSearchFormData={setSearchFormData}/>
      </div>

      {props.showResults &&
        <SearchResults
            searchFormData={searchFormData}
            results={searchResults}
            resultsLoading={resultsLoading}
        />
      }

    </div>
  )
}

export default Search
