
import "./Pagination.css"

const Pagination = (totalPost,postsPerPages,setCurrentPage,currentPage,pagination) => {

  console.log(pagination,"pai ki ")
    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost  / postsPerPages); i++) {
      paginationNumbers.push(i);
    }



    return (
        <div className='pagination'>
        {pagination?.map((page, index) => {
            return (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page == currentPage ? "active" : ""}>
                    {page}
                </button>
            );
        })}
    </div>
);

  
};

export default Pagination;