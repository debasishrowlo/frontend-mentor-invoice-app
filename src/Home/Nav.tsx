import logo from "@/assets/images/logo.svg"
import moonIcon from "@/assets/images/icon-moon.svg"
import userAvatar from "@/assets/images/image-avatar.jpg"

const Nav = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between bg-gray-500 lg:w-auto lg:h-full lg:flex-col lg:rounded-r-[20px]">
        <div className="inline-block relative md:w-20 md:h-20 p-6 bg-purple-200 rounded-r-[20px] overflow-hidden">
          <div className="absolute z-10 w-full h-full top-1/2 left-0 bg-purple-100 rounded-tl-[20px]" />
          <img src={logo} className="relative z-20 w-7 h-7" />
        </div>
        <div className="flex items-center lg:flex-col">
          <button type="button" className="px-6 md:px-8 lg:px-0 lg:py-6">
            <img src={moonIcon} className="w-5" />
          </button>
          <div className="h-full px-6 flex items-center border-l border-gray-100/10 md:px-8 lg:w-full lg:px-0 lg:py-6 lg:justify-center lg:border-l-0 lg:border-t">
            <img src={userAvatar} className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="h-[72px] md:h-20 lg:h-0" />
    </>
  )
}

export default Nav