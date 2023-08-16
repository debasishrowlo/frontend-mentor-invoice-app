import { useState } from "react"

import Nav from "./Nav"
import ListHeading from "./ListHeading"
import NoInvoicesFound from "./NoInvoicesFound"
import InvoiceList from "./InvoiceList"

import data from "./data.json"

const enum invoiceStatuses {
  draft = "draft",
  pending = "pending",
  paid = "paid",
}

type InvoiceData = {
  "id": string,
  "createdAt": string,
  "paymentDue": string,
  "description": string,
  "paymentTerms": number,
  "clientName": string,
  "clientEmail": string,
  "status": invoiceStatuses,
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

export type Invoice = {
  id: string,
  clientName: string,
  paymentDue: string,
  total: number,
  status: invoiceStatuses,
}

const getInvoices = (data:InvoiceData[]) => {
  return data.map(invoice => ({
    id: invoice.id,
    clientName: invoice.clientName,
    paymentDue: invoice.paymentDue,
    total: invoice.total,
    status: invoice.status,
  }))
}

const App = () => {
  const [invoices, setInvoices] = useState(getInvoices(data as InvoiceData[]))

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Nav />
      <div className="max-w-3xl grow flex flex-col lg:mx-auto">
        <ListHeading invoiceCount={invoices.length} />
        {invoices.length === 0 ? (
          <NoInvoicesFound />
        ) : (
          <InvoiceList invoices={invoices} />
        )}
      </div>
    </div>
  )
}

export default App