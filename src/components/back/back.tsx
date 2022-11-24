import { Link } from "react-router-dom"
import { Back as BackIcon} from "../images"

export const Back = () => {
  return (
    <nav>
      <Link to="/">
        <div className="border relative h-12 w-12 rounded-full border-secondary-500">
          <BackIcon className="absolute top-[12px] left-[10px] h-6 inline-block text-secondary-600" />
        </div>
      </Link>
    </nav>
  )
}