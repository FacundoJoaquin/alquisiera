import React, { useState, useEffect } from 'react';
import { paginate } from '../utils/paginate';

const Paginator = ({ items, itemsPerPage, currentPage, setCurrentItems, onPageChange }) => {
    const [totalPages, setTotalPages] = useState(0);
    const colsPerRow = 4; 
  
    useEffect(() => {
      const totalPages = Math.ceil(items.length / itemsPerPage);
      setTotalPages(totalPages);
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, items.length);
      let currentItems = items.slice(startIndex, endIndex);
    
      setCurrentItems(currentItems);
    }, [items, currentPage, itemsPerPage]);
    
    const handlePrevPage = (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        const newPage = currentPage - 1;
        onPageChange(newPage);
          const alquileresSection = document.getElementById('alquileres');
          if (alquileresSection) {
            alquileresSection.scrollIntoView({ behavior: 'smooth' });
          }

      }
    };
  
    const handleNextPage = (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        const newPage = currentPage + 1;
        onPageChange(newPage);
        const alquileresSection = document.getElementById('alquileres');
        if (alquileresSection) {
          alquileresSection.scrollIntoView({ behavior: 'smooth' });
        }

      }
    };
  
    return (
      <div>
        <div className="flex justify-center items-center mt-4">
          <button
            className="px-4 py-2 hover:bg-strongMainBlue transition-all duration-200 bg-mainBlue text-white rounded-l"
            onClick={(e) => handlePrevPage(e)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span className="px-4 py-2 bg-gray-200">{currentPage}</span>
          <button
            className="px-4 py-2 hover:bg-strongMainBlue transition-all duration-200 bg-mainBlue text-white rounded-r"
            onClick={(e) => handleNextPage(e)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    );
  };
  
  export default Paginator;
  