import logo from "./assets/images/logo.svg"
import moonIcon from "./assets/images/icon-moon.svg"
import arrowDownIcon from "./assets/images/icon-arrow-down.svg"
import plusIcon from "./assets/images/icon-plus.svg"
import emptyScreenIllustration from "./assets/images/illustration-empty.svg"

import userAvatar from "./assets/images/image-avatar.jpg"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex justify-between bg-gray-400">
        <div className="inline-block relative w-[72px] h-[72px] md:w-20 md:h-20 p-6 bg-purple-200 rounded-r-[20px] overflow-hidden">
          <div className="absolute z-10 w-full h-full top-1/2 left-0 bg-purple-100 rounded-tl-[20px]" />
          <img src={logo} className="relative z-20 w-7 h-7" />
        </div>
        <div className="flex items-center">
          <div className="px-6 md:px-8">
            <img src={moonIcon} className="w-5" />
          </div>
          <div className="h-full px-6 md:px-8 flex items-center border-l border-gray-100/10">
            <img src={userAvatar} className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-9 md:mt-16 px-6 flex justify-between">
        <div>
          <p className="text-24 md:text-36 font-bold tracking-heading-m md:tracking-heading-l">Invoice</p>
          <p className="-mt-1 text-14 font-medium leading-4 text-gray-300">No invoices</p>
        </div>
        <div className="flex">
          <button type="button" className="px-4.5 flex items-center font-bold tracking-heading-s">
            <span className="md:hidden">Filter</span>
            <span className="hidden md:inline">Filter by status</span>
            <img src={arrowDownIcon} className="w-2 h-1 ml-3 md:w-2.5 md:h-1.5" />
          </button>
          <div className="flex items-center">
            <button type="button" className="pl-1.5 pr-4 py-1.5 bg-purple-200 flex items-center rounded-full md:pl-2 md:py-2 md:pr-4.5">
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full">
                <img src={plusIcon} className="w-3" />
              </div>
              <span className="ml-2 -mb-1 font-bold leading-4 tracking-heading-s text-white md:ml-4">
                <span className="md:hidden">New</span>
                <span className="hidden md:inline">New Invoice</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center grow">
        <img src={emptyScreenIllustration} className="w-48 md:w-60" />
        <p className="mt-11 text-24 font-bold tracking-heading-m">There is nothing here</p>
        <p className="mt-6 text-center leading-4 text-14 font-medium text-gray-300">
          Create an invoice by clicking the <br />
          <span className="font-bold">New</span> button and get started
        </p>
      </div>
    </div>
  )
}

export default App