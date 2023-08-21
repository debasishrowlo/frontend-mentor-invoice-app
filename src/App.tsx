import InvoiceDetails from "./InvoiceDetails"

import data from "./data.json"
import { useState } from "react"

import Nav from "./Nav"
import ListHeading from "./ListHeading"
import InvoiceList from "./InvoiceList"

// different change but on the same file

export type Invoice = {
  "id": string,
  "createdAt": string,
  "paymentDue": string,
  "description": string,
  "paymentTerms": number,
  "clientName": string,
  "clientEmail": string,
  "status": string,
  "senderAddress": {
    "street": string,
    "city": string,
    "postCode": string,
    "country": string,
  },
  "clientAddress": {
    "street": string,
    "city": string,
    "postCode": string,
    "country": string,
  },
  "items": Array<{
    "name": string,
    "quantity": number,
    "price": number,
    "total": number,
  }>,
  "total": number,
}

// change

export const invoiceStatuses = {
  draft: "draft",
  pending: "pending",
  paid: "paid",
}

export const getFormattedDate = (dateString: string) => {
  const dateObj = new Date(dateString)
  const date = dateObj.getDate()
  const month = dateObj.toLocaleString("en-US", { month: "short" })
  const year = dateObj.getFullYear()
  return `${date} ${month} ${year}`
}

const App = () => {
  const [invoices, setInvoices] = useState(data)
  const [activeInvoiceId, setActiveInvoiceId] = useState("RT3080");

  const activeInvoiceIndex = activeInvoiceId !== null 
    ? invoices.findIndex(invoice => invoice.id === activeInvoiceId)
    : null
  const activeInvoice = activeInvoiceId !== null ? invoices[activeInvoiceIndex] : null
  
  const markAsPaid = () => {
    setInvoices([
      ...invoices.slice(0, activeInvoiceIndex),
      {
        ...activeInvoice,
        status: invoiceStatuses.paid,
      },
      ...invoices.slice(activeInvoiceIndex + 1),
    ])
  }

  const deleteActiveInvoice = () => {
    setInvoices([
      ...invoices.slice(0, activeInvoiceIndex),
      ...invoices.slice(activeInvoiceIndex + 1),
    ])
    setActiveInvoiceId(null)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Nav />
      <div className="max-w-3xl grow flex flex-col lg:mx-auto">
        <ListHeading invoiceCount={invoices.length} />
        {(activeInvoiceId === null) ? (
          <InvoiceList 
            invoices={invoices}
            showInvoice={(id:string) => setActiveInvoiceId(id)}
          />
        ) : (
          <InvoiceDetails
            invoice={activeInvoice}
            goBack={() => setActiveInvoiceId(null)}
            markAsPaid={() => markAsPaid()}
            deleteInvoice={() => deleteActiveInvoice()}
          />
        )}
      </div>
    </div>
  )
}

export default App