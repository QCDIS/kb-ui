import Link from "next/link";
import { clsx } from 'clsx';

export default function About() {

  const people = [
    {name: "Gabriel Pelouze", affiliation: "LifeWatch ERIC", url: "https://www.uva.nl/en/profile/p/e/g.pelouze/g.pelouze.html"},
    {name: "Spiros Koulouzis", affiliation: "LifeWatch ERIC", url: "https://www.uva.nl/en/profile/k/o/s.koulouzis/s.koulouzis.html"},
    {name: "Peter Thijsse", affiliation: "MARiene Informatie Service", url: "https://www.linkedin.com/in/peterthijsse/?originalSubdomain=nl"},
    {name: "Na Li", affiliation: "University of Amsterdam", url: "https://www.uva.nl/en/profile/l/i/n.li/n.li.html"},
    {name: "Barbara Magagna", affiliation: "Environment Agency Austria", url: "https://at.linkedin.com/in/barbara-magagna-2794ba42"},
    {name: "Markus Stocker", affiliation: "TIB - Leibniz Information, Centre for Science and Technology", url: "https://markusstocker.com"},
    {name: "Keith Jeffery", affiliation: "British Geological Survey UK", url: "https://www.linkedin.com/in/keith-jeffery-792ba069/?originalSubdomain=uk"},
    {name: "Christian Pichot", affiliation: "French National Institute for Agriculture Food, and Environment", url: null},
    {name: "Zhiming Zhao", affiliation: "University of Amsterdam", url: "https://www.uva.nl/en/profile/z/h/z.zhao/z.zhao.html"},
  ]

  const formerPeople = [
    {name: "Siamak Farshidi", affiliation: "University of Amsterdam", url: "https://siamakfarshidi.nl"},
    {name: "Yuxue Liu", affiliation: "University of Amsterdam", url: null},
    {name: "Xiaofeng Liao", affiliation: "University of Amsterdam", url: null},
    {name: "Maxim Vitalis", affiliation: "University of Amsterdam", url: null},
    {name: "Doron Goldfarb", affiliation: "Environment Agency Austria", url: null},
  ]

  function renderPerson(person: any) {
    return (
      <li key={person.name}>
        <a href={person.url} className={clsx(person.url && "hover:underline")}>{person.name} ({person.affiliation})</a>
      </li>
    )
  }

  return (
    <div>

      <h2 className="text-2xl font-light mb-8">
        About the ENVRI Knowledge Base
      </h2>

      <div className="flex flex-row space-x-20">

        <div className="w-1/2 space-y-4">
          <h3 className="text-xl">Partners</h3>
          <div className="flex flex-column items-center space-x-8">
            <img
              alt="EU flag"
              src="/logo-eu-200.png"
              width="200"
              className="m-0"
            />
            <p className="align-middle">
              This virtual ENVRI community platform is maintained thanks to <Link href='https://envri.eu/home-envri-fair/' className="underline">ENVRI-FAIR project</Link>. The project received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 824068.
            </p>
          </div>
          <div className="flex flex-column items-center space-x-8">
            <img
              alt="LifeWatch ERIC logo"
              src="/logo-lifewatch-eric-200.png"
              width="200"
              className="m-0"
            />
            <p className="align-middle">
              Development and operations are supported by <Link href="https://www.lifewatch.eu/" className="underline">LifeWatch ERIC</Link>.
            </p>
          </div>
          <div className="flex flex-column items-center space-x-8">
            <img
              alt="UvA logo"
              src="/logo-uva-200.png"
              width="200"
              className="m-"
            />
            <p className="align-middle">
              Research and development are led by the <Link href="https://www.uva.nl/en" className="underline">University of Amsterdam</Link>.
            </p>
          </div>
        </div>

        <div className="w-1/2 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl">People</h3>
            <ul>
              {people.map(renderPerson)}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl">Former members</h3>
            <ul>
              {formerPeople.map(renderPerson)}
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}