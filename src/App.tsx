import Home from "./Home"

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

export const invoiceStatuses = {
  draft: "draft",
  pending: "pending",
  paid: "paid",
}

const App = () => <Home />

export default App