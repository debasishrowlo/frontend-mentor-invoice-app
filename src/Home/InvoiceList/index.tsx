import { Invoice, getFormattedDate } from "@/Home"
import NoInvoicesFound from "./NoInvoicesFound"
import Status from "../Status"

import arrowRightIcon from "@/assets/images/icon-arrow-right.svg"

const List = ({
  invoices,
  showInvoice,
} : {
  invoices: Invoice[],
  showInvoice: Function,
}) => {
  return (
    <div className="my-8 px-6 space-y-4 lg:px-0">
      {invoices.map(invoice => {
        const paymentDue = `Due ${getFormattedDate(invoice.paymentDue)}`
        
        return (
          <button 
            type="button" 
            className="shadow w-full p-6 bg-white rounded-lg md:flex md:items-center"
            onClick={() => showInvoice(invoice.id)}
            key={invoice.id}
          >
            <div className="flex justify-between md:w-1/2 md:grow">
              <p className="leading-4 tracking-heading-s font-bold">
                <span className="text-blue-100">#</span>{invoice.id}
              </p>
              <p className="hidden leading-4 text-14 font-medium text-gray-400 md:inline-block">{paymentDue}</p>
              <p className="leading-4 text-14 font-medium text-gray-400">{invoice.clientName}</p>
            </div>
            <div className="mt-6 flex justify-between items-center md:w-1/2 md:mt-0 md:grow">
              <div className="md:grow">
                <p className="md:hidden leading-4 text-14 font-medium text-gray-400">{paymentDue}</p>
                <p className="mt-2 text-left leading-6 tracking-heading-s text-16 font-bold md:mt-0 md:text-right">&pound; {invoice.total.toFixed(2)}</p>
              </div>
              <div className="flex items-center md:ml-10">
                <Status status={invoice.status} />
                <img src={arrowRightIcon} className="hidden md:inline-block ml-5" />
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}

const InvoiceList = ({
  invoices,
  showInvoice,
} : {
  invoices: Invoice[],
  showInvoice: Function,
}) => {
  return (
    <>
      {invoices.length === 0 ? (
        <NoInvoicesFound />
      ) : (
        <List 
          invoices={invoices}
          showInvoice={(id:string) => showInvoice(id)}
        />
      )}
    </>
  )
}

export default InvoiceList