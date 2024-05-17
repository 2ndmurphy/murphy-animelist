import Link from "next/link"

const Header = ({ title, linkHref, linkTitle}) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg md:text-2xl text-color-primary font-bold">{title}</h1>
        {
          linkHref && linkTitle ? (
            <Link href={linkHref} className="underline md:text-xl text-md 
            hover:text-color-accent text-color-primary transition-all">
              {linkTitle}
            </Link>
          ) : (
            null
          )
        }
      </div>
    </>
  )
}

export default Header