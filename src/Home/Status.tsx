const Status = (
  { status } : 
  { status: string }
) => {
  let statusStyles = null

  if (status === "paid") {
    statusStyles = {
      text: "Paid",
      color: "text-green",
      bg: "bg-green/10",
      indicatorBg: "bg-green",
    }
  } else if (status === "pending") {
    statusStyles = {
      text: "Pending",
      color: "text-orange",
      bg: "bg-orange/10",
      indicatorBg: "bg-orange",
    }
  } else if (status === "draft") {
    statusStyles = {
      text: "Draft",
      color: "text-gray",
      bg: "bg-gray-500/10",
      indicatorBg: "bg-gray-500",
    }
  }

  return (
    <div className={`w-[104px] py-3.5 flex items-center justify-center ${statusStyles.bg} ${statusStyles.color} rounded-md`}>
      <span className={`inline-block w-2 h-2 ${statusStyles.indicatorBg} rounded-full`}></span>
      <span className="ml-2 mt-1 leading-4 tracking-heading-s font-bold">{statusStyles.text}</span>
    </div>
  )
}

export default Status