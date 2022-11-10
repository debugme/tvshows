import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export const Back = () => {
  return (
    <nav className="col-span-1">
      <Link to="/">
        <div className="px-3 py-2 bg-slate-400 rounded-md w-[100px] h-12 relative">
          <ArrowLeftIcon className="absolute top-[12px] left-[10px] h-6 inline-block text-slate-600" />
          <p className="absolute top-[10px] left-[42px] text-lg text-slate-700">Back</p>
        </div>
      </Link>
    </nav>
  )
}