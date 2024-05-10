import Link from "next/link"

const Header = ({ title, linkHref, linkTitle}) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <Link href={linkHref} className="underline md:text-xl text-md 
        hover:text-indigo-500 transition-all">
          {linkTitle}
        </Link>
      </div>
    </>
  )
}

export default Header