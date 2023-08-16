import arrowDownIcon from "./assets/images/icon-arrow-down.svg"
import plusIcon from "./assets/images/icon-plus.svg"

const ListHeading = ({ invoiceCount } : { invoiceCount: number }) => {
  return (
    <div className="mt-9 px-6 flex justify-between lg:px-0 md:mt-16 lg:mt-20">
      <div>
        <p className="text-24 md:text-36 font-bold tracking-heading-m md:tracking-heading-l">Invoices</p>
        <p className="-mt-1 text-14 font-medium leading-4 text-gray-400">
          {(invoiceCount === 0) ?  "No invoices" : `${invoiceCount} invoices`}
        </p>
      </div>
      <div className="flex">
        <button type="button" className="px-4.5 flex items-center font-bold tracking-heading-s lg:pr-10">
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
  )
}

export default ListHeading