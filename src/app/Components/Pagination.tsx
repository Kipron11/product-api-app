import { PaginationModel } from "../Models/PaginationModel";

const Pagination = ({ currentPage, totalPages, onPreviousPage, onNextPage, onPageClick }: PaginationModel) => (
  <div className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium">
    <button
      className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      onClick={onPreviousPage}
      disabled={currentPage <= 1}
    >
      Previous
    </button>
    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        className={`flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 ${
          currentPage === index + 1
            ? "text-green-500"
            : "hover:bg-gray-100 hover:text-gray-700"
        }`}
        onClick={() => onPageClick(index + 1)}
      >
        {index + 1}
      </button>
    ))}
    <button
      className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      onClick={onNextPage}
      disabled={currentPage >= totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;
