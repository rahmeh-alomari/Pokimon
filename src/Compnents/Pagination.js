import React from "react";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div>
    <span> {goToPrevPage && <button type="button" className="btn btn-primary " onClick={goToPrevPage}>Prev Page</button>}</span> 
    <span>  {goToNextPage && <button type="button" className="btn btn-primary" onClick={goToNextPage}>Next Page</button>}</span> 
    </div>
  );
};

export default Pagination;
