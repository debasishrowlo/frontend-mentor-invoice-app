const Actions = ({
  isPaid,
  markAsPaid,
  showDeleteDialog,
} : {
  isPaid: boolean,
  markAsPaid: Function,
  showDeleteDialog: Function,
}) => {
  return (
    <>
      <button type="button" className="w-full px-6 pt-4 pb-3 bg-gray-100 hover:bg-gray-300 font-bold text-blue-100 rounded-full transition-colors duration-300">Edit</button>
      <button 
        type="button" 
        className="w-full px-6 pt-4 pb-3 ml-2 bg-red-200 hover:bg-red-100 font-bold text-white rounded-full transition-colors duration-300"
        onClick={() => showDeleteDialog()}
      >
        Delete
      </button>
      {!isPaid && (
        <button 
          type="button" 
          className="w-full px-6 pt-4 pb-3 ml-2 bg-purple-200 hover:bg-purple-100 font-bold text-white whitespace-nowrap rounded-full transition-colors duration-300"
          onClick={() => markAsPaid()}
        >
          Mark as Paid
        </button>
      )}
    </>
  )
}

export default Actions