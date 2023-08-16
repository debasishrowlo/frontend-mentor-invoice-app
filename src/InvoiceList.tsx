import { Invoice } from "./App"

import arrowRightIcon from "./assets/images/icon-arrow-right.svg"

const InvoiceList = ({
  invoices,
} : {
  invoices: Invoice[],
}) => {
  return (
    <div className="my-8 px-6 space-y-4 lg:px-0">
      {invoices.map(invoice => {
        const dueDate = new Date(invoice.paymentDue)
        const date = dueDate.getDate()
        const month = dueDate.toLocaleString("en-US", { month: "short" })
        const year = dueDate.getFullYear()
        const paymentDue = `Due ${date} ${month} ${year}`

        let statusText = ""
        let statusTextColor = ""
        let statusBgColor = ""
        let dotBgColor = ""

        if (invoice.status === "paid") {
          statusText = "Paid"
          statusTextColor = "text-green"
          statusBgColor = "bg-green/10"
          dotBgColor = "bg-green"
        } else if (invoice.status === "pending") {
          statusText = "Pending"
          statusTextColor = "text-orange"
          statusBgColor = "bg-orange/10"
          dotBgColor = "bg-orange"
        } else if (invoice.status === "draft") {
          statusText = "Draft"
          statusTextColor = "text-gray-500"
          statusBgColor = "bg-gray-500/10"
          dotBgColor = "bg-gray-500"
        }
        
        return (
          <div className="p-6 bg-white rounded-lg shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] md:flex md:items-center">
            <div className="flex justify-between md:w-1/2 md:grow">
              <p className="leading-4 tracking-heading-s font-bold">
                <span className="text-blue-100">#</span>{invoice.id}
              </p>
              <p className="hidden leading-4 text-14 font-medium text-gray-400 md:inline-block">{paymentDue}</p>
              <p className="leading-4 text-14 font-medium text-gray-400">{invoice.clientName}</p>
            </div>
            <div className="mt-6 flex justify-between items-center md:w-1/2 md:mt-0 md:grow">
              <div className="md:grow md:text-right">
                <p className="md:hidden leading-4 text-14 font-medium text-gray-400">{paymentDue}</p>
                <p className="mt-2 leading-6 tracking-heading-s text-16 font-bold md:mt-0">&pound; {invoice.total.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <div className={`w-[104px] py-3.5 flex items-center justify-center ${statusBgColor} ${statusTextColor} rounded-md md:ml-10`}>
                  <span className={`inline-block w-2 h-2 ${dotBgColor} rounded-full`}></span>
                  <span className="ml-2 mt-1 leading-4 tracking-heading-s font-bold">{statusText}</span>
                </div>
                <img src={arrowRightIcon} className="hidden md:inline-block ml-5" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default InvoiceList