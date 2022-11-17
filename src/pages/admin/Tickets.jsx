import React from "react";
import { Link } from "react-router-dom";
import {
  RiFilter2Fill,
  RiSearch2Line,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiTicketLine,
  RiArrowLeftSLine,
  RiFileTextLine,
  RiDiscussLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { Tab, Disclosure, Transition } from "@headlessui/react";

const Tickets = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Overview</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>-</span>
            <span>Support Center</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill /> Filter
          </button>
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
            Create
          </button>
        </div>
      </div>
      {/* Portada */}
      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8">How Can We Help You?</h1>
          <form>
            <div className="relative">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Search for anything"
              />
            </div>
          </form>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img src="portada.svg" className="w-72 h-72 object-cover" />
        </div>
      </div>
      <Tab.Group>
        <div className="bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg">
          <Tab.List className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2 gap-y-6 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Overview
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Tickets
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                FAQ
              </Tab>
            </div>
            <div className="flex justify-center">
              <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
                Create
              </button>
            </div>
          </Tab.List>
        </div>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">
                    Popular tickets
                  </h1>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    Support <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      What admin theme does?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How to install on a local machine?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Laravel
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How Extended Licese works?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Next JS 13
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How can I import Google fonts?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Vue JS
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">FAQ</h1>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    All FAQ <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      What admin theme does?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How to install on a local machine?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Laravel
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How Extended Licese works?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Next JS 13
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How can I import Google fonts?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Vue JS
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Section 1 */}
              <div className="md:col-span-3">
                <form>
                  <div className="relative">
                    <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
                    <input
                      type="text"
                      className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                      placeholder="Search for anything"
                    />
                  </div>
                </form>
                <h1 className="text-white text-2xl my-8">Public tickets</h1>
                {/* Tickets */}
                <div>
                  {/* Ticket */}
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-blue-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-green-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <div className="p-8 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                      <RiArrowLeftSLine />
                    </button>
                    <div className="flex items-center">
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        1
                      </button>
                      <button className="py-2 px-4 bg-secondary-900 rounded-lg transition-colors text-gray-100">
                        2
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        3
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        4
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        5
                      </button>
                    </div>
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                      <RiArrowRightSLine />
                    </button>
                  </nav>
                </div>
              </div>
              {/* Section 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
                <div className="bg-secondary-900 p-8 rounded-lg xl:mb-8">
                  <h1 className="text-2xl text-white mb-8">More channels</h1>
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiFileTextLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Project Briefing</h5>
                        <p className="text-xs">
                          Check out our{" "}
                          <Link to="/" className="text-primary">
                            Support Policy
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiDiscussLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">More to discuss?</h5>
                        <p className="text-xs">
                          Check out our{" "}
                          <Link to="/" className="text-primary">
                            jorge@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiTwitterLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Latest News</h5>
                        <p className="text-xs">
                          Follow us at{" "}
                          <Link to="/" className="text-primary">
                            KeenThemes Twitter
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiGithubLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Github Access</h5>
                        <p className="text-xs">
                          Our github repo{" "}
                          <Link to="/" className="text-primary">
                            KeenThemes Github
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary-900 p-8 rounded-lg">
                  <h1 className="text-2xl text-white mb-8">Documentation</h1>
                  <ul className="flex flex-col gap-y-4">
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Angular Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> React Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Vue Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Nich Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Dashboard Admin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg">
              <div className="mb-10">
                <h1 className="text-2xl text-white mb-2">How does it work?</h1>
                <p className="text-gray-500">
                  First, a disclaimer – the entire process of writing a blog
                  post often takes more than a couple of hours, even if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Section 1 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Buying Product</h1>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                </div>
                {/* Section 2 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Installation</h1>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tickets;
