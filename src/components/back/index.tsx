import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export const Back = () => {
  return (
    <nav className="col-span-1">
      <Link to="/">
        <div className=" px-3 bg-slate-400 py-2 rounded-md w-[100px] h-12 relative border border-slate-500 hover:border-slate-900">
          <ArrowLeftIcon className="absolute top-[12px] left-[10px] h-6 inline-block text-slate-600" />
          <p className="absolute top-[10px] left-[42px] text-lg text-slate-600">Back</p>
        </div>
      </Link>
    </nav>
  )
}