import Nav from "./Nav"
import ListHeading from "./ListHeading"
import NoInvoicesFound from "./NoInvoicesFound"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Nav />
      <div className="max-w-3xl grow flex flex-col lg:mx-auto">
        <ListHeading />
        <NoInvoicesFound />
      </div>
    </div>
  )
}

export default App