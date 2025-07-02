import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate 
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex space-x-2 justify-center mt-8"
        pageClassName="px-3 py-1 border rounded text-blue-600 hover:bg-blue-100"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-1 border rounded text-gray-600 hover:bg-gray-200"
        nextClassName="px-3 py-1 border rounded text-gray-600 hover:bg-gray-200"
        breakClassName="px-3 py-1 text-gray-500"
    />
  )
};

export default Pagination;
