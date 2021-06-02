import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  const paginateCondition = () => {
    if (totalPosts > 6) {
      return(
        <ul className='pagination pagination-sm justify-content-center mt-2 mb-5'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <nav>
      {paginateCondition()}
    </nav>
  );
};

export default Pagination;