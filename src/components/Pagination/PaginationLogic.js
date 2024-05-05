export const usePaginationLogic = (currentPage, totalPages, onPageChange) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  return { getPageNumbers, currentPage };
};
