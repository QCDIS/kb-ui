import React, {useEffect, useState} from "react";
import Link from "next/link";
import {clsx} from 'clsx';

import { SearchFormData, SearchResult } from "@/_types/search";

type Props = {
  searchFormData: SearchFormData,
  results: Array<SearchResult>,
  resultsLoading: boolean,
}

type ResultCardProps = {
  res: SearchResult,
}

const ResultCard: React.FC<ResultCardProps> = ({ res }) => {

  const [collapsed, setCollapsed] = useState(true)

  return (
    <div
      key={res.url}
      className="flex flex-col space-y-2"
    >
      <div
        className="flex flex-row mx-[-4px] space-x-4 h-7"
      >
        <img
          alt={`${res.resource_type} icon`}
          src={`/resourceTypes/${res.resource_type}.svg`}
          className="inline-block m-0"
        />
        {/* TODO: fix reference to RI / repo */}
        { res.resource_type === 'web_pages' &&
            <img
                alt={`${res.details.research_infrastructure} icon`}
                src={`/webPagesResearchInfrastructures/${res.details.research_infrastructure}.png`}
                className="inline-block m-0"
            />
        }
        { res.resource_type === 'datasets' &&
            <img
                alt={`${res.details.repository} icon`}
                src={`/datasetRepositories/${res.details.repository}.png`}
                className="inline-block m-0"
            />
        }
        { res.resource_type === 'notebooks' &&
            <img
                alt={`${res.details.repository} icon`}
                src={`/notebookRepositories/${res.details.repository}.png`}
                className="inline-block m-0"
            />
        }
      </div>

      <Link
        href={res.url}
        className="text-primaryDark hover:underline"
      >
        <h3>{res.title}</h3>
      </Link>

      <div>
        <p
          className={clsx(collapsed && "line-clamp-3")}
        >
          {res.description}
        </p>
        <button
          onClick={(e) => {setCollapsed(!collapsed)}}
          className="float-right"
        >
          (Show {collapsed? "more": "less"}) {/*TODO: hide if nothing is hidden*/}
        </button>
      </div>
    </div>
  )
}

const ResultsListLoading = () => {
  // TODO
  return (
    <p>(Loading)</p>
  )
}

const ResultsList: React.FC<Props> = (props) => {
  if (!props.results.length) {
    return (
      <p>No results</p>
    )
  }
  else {
    return (
      <div className="flex flex-col space-y-8">
        {props.results.map((res: SearchResult) => {
          return (<ResultCard res={res}/>)
        })}
      </div>
    )
  }
}

const SearchResults: React.FC<Props> = (props) => {

  useEffect(
    () => {},
    [props.searchFormData, props.results])

  return (
    <div className="flex flex-col px-16 py-5 space-y-10">
      {
        props.searchFormData.q && (props.resultsLoading ? (
          <ResultsListLoading/>
        ) : (
          <ResultsList {...props}/>
        ))
      }
    </div>
  )
}

export default SearchResults
