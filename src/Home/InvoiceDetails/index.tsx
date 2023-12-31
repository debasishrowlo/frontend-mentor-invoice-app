import { useState } from "react"
import { useMediaQuery } from "react-responsive"

import { Invoice, invoiceStatuses, getFormattedDate } from "@/Home"
// import EditDialog from "./EditDialog"
import Actions from "./Actions"
import DeleteDialog from "./DeleteDialog"
import Status from "../Status"

import arrowLeftIcon from "@/assets/images/icon-arrow-left.svg"

const Tablet = ({ children } : { children: React.ReactNode }) => {
  const isTablet= useMediaQuery({ minWidth: 768 })
  return isTablet ? <>{children}</> : null
}

const Mobile = ({ children } : { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? <>{children}</> : null
}

const InvoiceDetails = ({
  invoice,
  goBack,
  markAsPaid,
  deleteInvoice,
} : {
  invoice: Invoice,
  goBack: Function,
  markAsPaid: Function,
  deleteInvoice: Function,
}) => {
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false)
  const [editDialogVisible, setEditDialogVisible] = useState(true)

  const actionsProps = {
    isPaid: invoice.status === invoiceStatuses.paid,
    markAsPaid,
    showDeleteDialog: () => setDeleteDialogVisible(true),
  }

  return (
    <>
      <div className="mt-8 px-6 md:mb-8 lg:px-0">
        <button 
          type="button"
          onClick={() => goBack()}
          className="flex items-center"
        >
          <img src={arrowLeftIcon} className="-mt-1" />
          <span className="ml-6 leading-4 tracking-heading-s font-bold">Go back</span>
        </button>
        <div className="shadow mt-8 p-6 flex justify-between items-center bg-white rounded-lg md:px-8">
          <div className="w-full flex justify-between items-center md:w-auto">
            <p className="leading-4 text-14 font-medium text-gray-400">Status</p>
            <div className="md:ml-5">
              <Status status={invoice.status} />
            </div>
          </div>
          <Tablet>
            <div className="flex">
              <Actions {...actionsProps} />
            </div>
          </Tablet>
        </div>
        <div className="shadow mt-4 p-6 bg-white rounded-lg md:mt-6 md:p-8">
          <div className="md:flex md:justify-between">
            <div>
              <p className="leading-4 tracking-heading-s font-bold">
                <span className="text-blue-100">#</span>{invoice.id}
              </p>
              <p className="mt-1 leading-4 text-14 font-medium text-blue-100">{invoice.description}</p>
            </div>
            <div className="mt-8 leading-4.5 text-14 font-medium text-blue-100 md:mt-0 md:text-right">
              {invoice.senderAddress.street} <br />
              {invoice.senderAddress.city} <br />
              {invoice.senderAddress.postCode} <br />
              {invoice.senderAddress.country}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap md:mt-5">
            <div className="flex flex-col justify-between w-1/2 md:w-1/3">
              <div>
                <p className="leading-4 text-14 font-medium text-blue-100">Invoice Date</p>
                <p className="mt-3 leading-5 tracking-heading-s font-bold">{getFormattedDate(invoice.createdAt)}</p>
              </div>
              <div>
                <p className="leading-4 text-14 font-medium text-blue-100">Payment Due</p>
                <p className="mt-3 leading-5 tracking-heading-s font-bold">{getFormattedDate(invoice.paymentDue)}</p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3">
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
            <div className="w-full mt-9 md:w-1/3 md:mt-0">
              <p className="leading-4 text-14 font-medium text-blue-100">Sent to</p>
              <p className="mt-3 leading-5 tracking-heading-s font-bold">{invoice.clientEmail}</p>
            </div>
          </div>
          <div className="mt-10 md:mt-12">
            <div className="p-6 bg-gray-100 rounded-t-lg md:p-8">
              <div className="hidden md:flex w-full">
                <p className="w-1/2 leading-4.5 text-14 font-medium text-blue-100">Item Name</p>
                <p className="w-9 leading-4.5 text-center text-14 font-medium text-blue-100">QTY.</p>
                <p className="flex-1 leading-4.5 text-right text-14 font-medium text-blue-100">Price</p>
                <p className="flex-1 leading-4.5 text-right text-14 font-medium text-blue-100">Total</p>
              </div>
              <div className="space-y-6 md:mt-6">
                {invoice.items.map((item, index) => {
                  return (
                    <div className="flex justify-between items-center" key={index}>
                      <div className="md:w-1/2">
                        <p className="leading-5 tracking-heading-s font-bold">{item.name}</p>
                        <p className="mt-2 leading-5 tracking-heading-s font-bold text-blue-100 md:hidden">{item.quantity} x &pound; {item.price.toFixed(2)}</p>
                      </div>
                      <div className="hidden md:inline-block w-9 tracking-heading-s text-center font-bold text-blue-100">{item.quantity}</div>
                      <div className="hidden md:inline-block flex-1 tracking-heading-s text-right font-bold text-blue-100">&pound; {item.price.toFixed(2)}</div>
                      <div className="md:flex-1">
                        <p className="text-right leading-5 tracking-heading-s font-bold">&pound; {item.total.toFixed(2)}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="p-6 flex justify-between items-center bg-gray-500 rounded-b-lg md:p-8">
              <p className="leading-4.5 text-14 font-medium text-white">
                <span className="md:hidden">Grand Total</span>
                <span className="hidden md:block">Amount Due</span>
              </p>
              <p className="leading-8 tracking-heading-m text-24 font-bold text-white">&pound; {invoice.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <Mobile>
          <div className="mt-14 h-24" />
          <div className="shadow px-6 py-4 fixed left-0 bottom-0 w-full flex items-center bg-white">
            <Actions {...actionsProps} />
          </div>
        </Mobile>
      </div>
      {/* <EditDialog isVisible={editDialogVisible} /> */}
      <DeleteDialog
        invoiceId={invoice.id}
        isVisible={deleteDialogVisible}
        closeDialog={() => setDeleteDialogVisible(false)}
        deleteInvoice={() => deleteInvoice()}
      />
    </>
  )
}

export default InvoiceDetails