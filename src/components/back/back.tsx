import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export const Back = () => {
  return (
    <nav>
      <Link to="/">
        <div className="border relative h-12 w-12 rounded-full border-slate-500 hover:drop-shadow-2xl">
          <ArrowLeftIcon className="absolute top-[12px] left-[10px] h-6 inline-block text-slate-600" />
        </div>
      </Link>
    </nav>
  )
}