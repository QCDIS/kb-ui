import React from "react";
import Link from "next/link";

type Props = {
  aboutSectionId: string,
}

const AboutButton: React.FC<Props> = ({ aboutSectionId }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={`#${aboutSectionId}`}
      className="flex flex-col items-center absolute bottom-10 space-y-4"
      onClick={handleScroll}
    >
      <p>About</p>
      <svg className="w-6 h-6 stroke-primary animate-bounce" fill="none" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="5" viewBox="0 0 24 24">
        <path d="M 3.5,10 12,16 20.5,10"></path>
      </svg>
    </Link>
  )
}

export default AboutButton
