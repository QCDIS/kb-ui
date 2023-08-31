"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { clsx } from 'clsx';

import { SearchFormData, SearchResult } from "@/_types/search";

import SearchTitle from "@/components/ui/search-title";
import SearchForm from "@/components/ui/search-form";
import SearchResults from "@/components/ui/search-results";

type Props = {
  showResults: boolean,
}

const Search: React.FC<Props> = (props) => {

  const [searchFormData, setSearchFormData] = useState<SearchFormData>(new FormData())
  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([])

  useEffect(
    () => {
      get_search_results(searchFormData).then(setSearchResults)
    },
    [searchFormData])

  async function get_search_results(formData: FormData | undefined) {
    const q = formData && formData.get("q")
    if (!q) {
      return []
    }
    const url = `/api/search?q=${q}`
    const requestOptions: RequestInit = {
      method: "GET",
    };
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
        <SearchTitle compact={props.showResults}></SearchTitle>
        <SearchForm compact={props.showResults} searchFormData={searchFormData} setSearchFormData={setSearchFormData}></SearchForm>
      </div>

      {props.showResults &&
        <SearchResults searchFormData={searchFormData} results={searchResults}></SearchResults>
      }

    </div>
  )
}

export default Search
