import React from "react";
import { clsx } from 'clsx';

type Props = {
  compact: boolean,
}

const SearchTitle: React.FC<Props> = ({compact}) => {

  return (
    <div className={clsx(
      "flex flex-col items-center space-y-4",
      (!compact) && "min-w-full"
    )}>
      <a href={compact? "/": undefined}>
        <img
          src={`/logo-envri-fair-color-${compact? "130": "200"}.png`}
          alt="ENVRI FAIR logo"
          className="m-auto"
        />
      </a>
      {!compact && <h1 className="text-3xl font-light">Knowledge Base</h1>}
    </div>
  )
}

export default SearchTitle
