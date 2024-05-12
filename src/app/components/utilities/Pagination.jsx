import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const HandlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  }
  const HandleNextPage = () => {
    setPage((nextState) => nextState + 1);
    scrollTop();
  }
  return (
    <div className='flex justify-center items-center p-8 text-color-primary'>
      <button 
      className="inline-flex size-10 items-center justify-center rounded border 
      border-color-primary bg-white hover:text-color-accent hover:border-color-accent
      rtl:rotate-180 transition-all"
      onClick={HandlePrevPage}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
      </button>
      <p className='ml-2 mr-2'>
        {page}
        <span className='ml-2 mr-2'>/</span>
        <span className='mx-0.25'>{lastPage}</span>
      </p>
      <button 
      className="inline-flex size-10 items-center 
      justify-center rounded border border-color-primary 
      bg-white hover:text-color-accent hover:border-color-accent
      rtl:rotate-180 transition-all"
      onClick={HandleNextPage}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
      </button>
    </div>
  )
}

export default Pagination