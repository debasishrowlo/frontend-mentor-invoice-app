import emptyScreenIllustration from "@/assets/images/illustration-empty.svg"

const NoInvoicesScreen = () => {
  return (
    <div className="grow flex flex-col justify-center items-center">
      <img src={emptyScreenIllustration} className="w-48 md:w-60" />
      <p className="mt-11 text-24 font-bold tracking-heading-m">There is nothing here</p>
      <p className="mt-6 text-center leading-4 text-14 font-medium text-gray-400">
        Create an invoice by clicking the <br />
        <span className="font-bold">New</span> button and get started
      </p>
    </div>
  )
}

export default NoInvoicesScreen