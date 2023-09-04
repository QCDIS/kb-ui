import React, {useEffect} from "react";
import Link from "next/link";

import { SearchFormData, SearchResult } from "@/_types/search";

type Props = {
  searchFormData: SearchFormData | undefined,
  results: Array<SearchResult>,
}

const SearchResults: React.FC<Props> = ({searchFormData, results}) => {

  useEffect(
    () => {},
    [searchFormData, results])

  return (
    <div className="flex flex-col px-16 py-5 space-y-10">
      <p>{searchFormData && (
        `Results for “${searchFormData.get("q")}” (resource type: ${searchFormData.get("resource_type")})`
      )}
      </p>
      <div
        className="flex flex-col space-y-8"
      >
        {results.map((res: SearchResult) => {
          return(
            <div key={res.url}>
              <Link
                href={res.url}
                className="text-primaryDark hover:underline"
              >
                <h3>({res.resource_type}) {res.title}</h3>
              </Link>
              <p>{res.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchResults
