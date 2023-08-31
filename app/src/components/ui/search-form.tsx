import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import { clsx } from 'clsx';

import { SearchFormData } from "@/_types/search";

type Props = {
  compact: boolean,
  searchFormData: SearchFormData,
  setSearchFormData: React.Dispatch<React.SetStateAction<FormData>>,
}

const SearchForm: React.FC<Props> = ({compact, searchFormData, setSearchFormData}) => {

  const { push } = useRouter()
  const searchParams = useSearchParams()

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(
    () => {
      const formData = new FormData(formRef.current || undefined)
      setSearchFormData(formData)
    },
    [formRef]
  )

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)
    setSearchFormData(formData)
    push(`/search?q=${formData.get("q")}`)
  }

  return (
    <form
      className={clsx(
      "flex flex-col",
        compact? "space-y-1": "space-y-4",
        compact? "flex-grow": "min-w-full",
        compact? "items-left": "items-center",
      )}
      ref={formRef}
      onSubmit={handleSubmit}
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
            defaultValue={searchParams.get("q") || undefined}
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
        {["All", "Webpages", "Datasets", "APIs", "Notebooks"].map((resourceType) => {
          return (
            <li key={resourceType}>
              <input
                type="radio"
                name="resource_type"
                value={resourceType}
                id={resourceType}
                className="hidden peer"
                defaultChecked={resourceType === "All"}
              />
              <label
                htmlFor={resourceType}
                className="
                  relative rounded-full px-6 py-2.5 text-s border
                  transition duration-200 ease-in-out
                  hover:outline-none hover:border-transparent hover:ring-2 hover:ring-secondary
                  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-secondary
                  active:bg-secondary active:outline-none active:border-transparent active:ring-2 active:ring-secondary
                  peer-checked:bg-secondary
                  "
              >{resourceType}</label>
            </li>
          )
        })}
      </ul>

    </form>
  )
}

export default SearchForm
