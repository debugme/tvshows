import { Link } from "react-router-dom"
import { Back as BackIcon} from "../images"

export const Back = () => {
  return (
    <nav>
      <Link to="/">
        <div className="border relative h-12 w-12 rounded-full border-back-icon hover:drop-shadow-2xl">
          <BackIcon className="absolute top-[12px] left-[10px] h-6 inline-block text-back-2" />
        </div>
      </Link>
    </nav>
  )
}