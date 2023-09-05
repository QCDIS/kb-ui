import React, { useEffect, useState } from "react";
import {useRouter, useSearchParams} from 'next/navigation'
import {clsx} from 'clsx';

import {ResourceType, SearchFormData} from "@/_types/search";

type Props = {
  compact: boolean,
  setSearchFormData: React.Dispatch<React.SetStateAction<SearchFormData>>,
}

const SearchForm: React.FC<Props> = ({compact, setSearchFormData}) => {

  const strToResourceType = (s: string): ResourceType => {
    return s as unknown as ResourceType
  }
  const resourceTypeToStr = (r: ResourceType): string => {
    return r as unknown as string
  }

  const availableResourceTypes = [
    {value: strToResourceType("all"), display_name: "All"},
    {value: strToResourceType("web_pages"), display_name: "Web Pages"},
    {value: strToResourceType("datasets"), display_name: "Datasets"},
    {value: strToResourceType("apis"), display_name: "APIs"},
    {value: strToResourceType("notebooks"), display_name: "Notebooks"},
  ]

  const submitSearch = () => {
    q && push(`/search?q=${q}&resourceType=${resourceType}`)
  }

  const updateSearchFormData = () => {
    q && setSearchFormData({q: q, resourceType: resourceType})
  }

  const { push } = useRouter()
  const searchParams = useSearchParams()

  const [q, setQ] = useState<string>(searchParams.get("q") || "")
  const [resourceType, setResourceType] = useState<ResourceType>(strToResourceType(searchParams.get("resourceType") || "all"))

  const onQChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value)
  }

  const onResourceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResourceType(strToResourceType(e.target.value))
  }

  // Update search form data after initial render (grabs url value)
  useEffect(
    () => {
      updateSearchFormData()
    },
    []
  )

  // Update search data and url on form submit
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    submitSearch()
    updateSearchFormData()
  }

  useEffect(
    () => {
      submitSearch()
      updateSearchFormData()
    },
    [resourceType]
  )

  return (
    <form
      className={clsx(
      "flex flex-col",
        compact? "space-y-1": "space-y-4",
        compact? "flex-grow": "min-w-full",
        compact? "items-left": "items-center",
      )}
      onSubmit={onSubmit}
    >

      {/* Search box */}
      <div className="min-w-full">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch space-x-2">
          <input
            type="text"
            name="q"
            className="
              relative block flex-auto rounded-full border border-black outline-white px-6 py-2.5 text-black
              transition duration-200 ease-in-out
              hover:outline-none hover:border-transparent hover:ring-2 hover:ring-secondary
              focus:outline-none focus:border-transparent focus:ring-2 focus:ring-secondary
              "
            placeholder="Search the ENVRI Knowledge Base"
            value={q}
            onChange={onQChange}
          />
          <button
            className="
              items-center rounded-full bg-primary px-3.5 p-2.5
              transition duration-200 ease-in-out
              hover:bg-secondary hover:outline-none hover:ring-2 hover:ring-secondary
              active:bg-secondary active:outline-none active:ring-2 active:ring-secondary
              "
            type="submit"
          >
            <svg
              viewBox="0 0 20 20"
              className="w-5 h-5">
              <path
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search categories */}
      <ul className="flex flex-row space-x-2">
        {availableResourceTypes.map((availableResourceType) => {
          return (
            <li key={availableResourceType.value}>
              <input
                type="radio"
                name="resourceType"
                className="hidden peer"
                id={resourceTypeToStr(availableResourceType.value)}
                value={availableResourceType.value}
                checked={resourceType === availableResourceType.value}
                onChange={onResourceTypeChange}
              />
              <label
                htmlFor={resourceTypeToStr(availableResourceType.value)}
                className="
                  relative rounded-full px-6 py-2.5 text-s border
                  transition duration-200 ease-in-out
                  hover:outline-none hover:border-transparent hover:ring-2 hover:ring-secondary
                  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-secondary
                  active:bg-secondary active:outline-none active:border-transparent active:ring-2 active:ring-secondary
                  peer-checked:bg-secondary
                  "
              >{availableResourceType.display_name}</label>
            </li>
          )
        })}
      </ul>

    </form>
  )
}

export default SearchForm
