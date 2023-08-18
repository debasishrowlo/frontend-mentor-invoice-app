import { useState } from "react"

import Nav from "./Nav"
import ListHeading from "./ListHeading"
import InvoiceList from "./InvoiceList"
import InvoiceDetails from "./InvoiceDetails"

import data from "./data.json"

const invoiceStatuses = {
  draft: "draft",
  pending: "pending",
  paid: "paid",
}

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

export const getFormattedDate = (dateString: string) => {
  const dateObj = new Date(dateString)
  const date = dateObj.getDate()
  const month = dateObj.toLocaleString("en-US", { month: "short" })
  const year = dateObj.getFullYear()
  return `${date} ${month} ${year}`
}

const App = () => {
  const [invoices, setInvoices] = useState(data)
  const [activeInvoiceId, setActiveInvoiceId] = useState("XM9141")

  const activeInvoice = activeInvoiceId !== null 
    ? invoices.find(invoice => invoice.id === activeInvoiceId) 
    : null

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
          />
        )}
      </div>
    </div>
  )
}

export default App