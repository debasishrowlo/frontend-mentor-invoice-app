import { Invoice, getFormattedDate } from "./App"
import Status from "./Status"

import arrowLeftIcon from "./assets/images/icon-arrow-left.svg"

const InvoiceDetails = ({
  invoice,
  goBack,
} : {
  invoice: Invoice,
  goBack: Function,
}) => {
  return (
    <div className="mt-8 px-6 lg:px-0">
      <button 
        type="button"
        onClick={() => goBack()}
        className="flex items-center"
      >
        <img src={arrowLeftIcon} className="-mt-0.5" />
        <span className="ml-6 leading-4 tracking-heading-s font-bold">Go back</span>
      </button>
      <div className="shadow mt-8 p-6 flex justify-between items-center bg-white rounded-lg">
        <p className="leading-4 text-14 font-medium text-gray-400">Status</p>
        <Status status={invoice.status} />
      </div>
      <div className="shadow mt-4 p-6 bg-white rounded-lg">
        <p className="leading-4 tracking-heading-s font-bold">
          <span className="text-blue-100">#</span>{invoice.id}
        </p>
        <p className="mt-1 leading-4 text-14 font-medium text-blue-100">{invoice.description}</p>
        <div className="mt-8 leading-4.5 text-14 font-medium text-blue-100">
          {invoice.senderAddress.street} <br />
          {invoice.senderAddress.city} <br />
          {invoice.senderAddress.postCode} <br />
          {invoice.senderAddress.country}
        </div>
        <div className="mt-8 flex">
          <div className="flex flex-col justify-between w-1/2">
            <div>
              <p className="leading-4 text-14 font-medium text-blue-100">Invoice Date</p>
              <p className="mt-3 leading-5 tracking-heading-s font-bold">{getFormattedDate(invoice.createdAt)}</p>
            </div>
            <div>
              <p className="leading-4 text-14 font-medium text-blue-100">Payment Due</p>
              <p className="mt-3 leading-5 tracking-heading-s font-bold">{getFormattedDate(invoice.paymentDue)}</p>
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <p className="leading-4 text-14 font-medium text-blue-100">Bill To</p>
              <p className="mt-3 leading-5 tracking-heading-s font-bold">{invoice.clientName}</p>
            </div>
            <div className="mt-2 leading-4.5 text-14 font-medium text-blue-100">
              {invoice.clientAddress.street} <br />
              {invoice.clientAddress.city} <br />
              {invoice.clientAddress.postCode} <br />
              {invoice.clientAddress.country}
            </div>
          </div>
        </div>
        <div className="mt-9">
          <p className="leading-4 text-14 font-medium text-blue-100">Sent to</p>
          <p className="mt-3 leading-5 tracking-heading-s font-bold">{invoice.clientEmail}</p>
        </div>
        <div className="mt-10">
          <div className="p-6 bg-gray-100 space-y-6 rounded-t-lg">
            {invoice.items.map(item => {
              return (
                <div className="flex justify-between items-center">
                  <div>
                    <p className="leading-5 tracking-heading-s font-bold">{item.name}</p>
                    <p className="mt-2 leading-5 tracking-heading-s font-bold text-blue-100">{item.quantity} x &pound; {item.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="leading-5 tracking-heading-s font-bold">&pound; {item.total.toFixed(2)}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="p-6 flex justify-between items-center bg-gray-500 rounded-b-lg">
            <p className="leading-4.5 text-14 font-medium text-white">Grand Total</p>
            <p className="leading-8 tracking-heading-m text-24 font-bold text-white">&pound; {invoice.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 h-24" />
      <div className="shadow px-6 py-4 fixed left-0 bottom-0 w-full flex items-center space-x-2 bg-white">
        <button type="button" className="w-full px-6 pt-4 pb-3 bg-gray-100 font-bold text-blue-100 rounded-full">Edit</button>
        <button type="button" className="w-full px-6 pt-4 pb-3 bg-red-200 font-bold text-white rounded-full">Delete</button>
        <button type="button" className="w-full px-6 pt-4 pb-3 bg-purple-200 font-bold text-white whitespace-nowrap rounded-full">Mark as Paid</button>
      </div>
    </div>
  )
}

export default InvoiceDetails