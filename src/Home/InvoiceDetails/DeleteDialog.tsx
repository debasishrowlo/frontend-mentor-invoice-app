import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

const DeleteDialog = ({
  invoiceId,
  isVisible,
  closeDialog,
  deleteInvoice,
} : {
  invoiceId: string,
  isVisible: boolean,
  closeDialog: Function,
  deleteInvoice: Function,
}) => {
  return (
    <Transition appear show={isVisible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => closeDialog()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="leading-8 tracking-heading-m text-24 font-bold leading-6"
                >
                  Confirm Deletion
                </Dialog.Title>
                <div className="mt-2">
                  <p className="leading-5 text-14 font-medium text-gray-400">Are you sure you want to delete invoice #{invoiceId}? This action cannot be undone.</p>
                </div>
                <div className="mt-5 flex justify-end">
                  <button 
                    type="button" 
                    className="w-24 px-6 pt-4 pb-3 bg-gray-100 font-bold text-blue-100 rounded-full"
                    onClick={() => closeDialog()}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    className="w-24 px-6 pt-4 pb-3 ml-2 bg-red-200 font-bold text-white rounded-full"
                    onClick={() => deleteInvoice()}
                  >
                    Delete
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DeleteDialog