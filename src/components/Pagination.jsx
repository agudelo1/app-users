const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-1 py-8 ">
      {pages.map((page) => (
        <li
          className={`cursor-pointer p-2 px-4 rounded-md ${
            currentPage === page && "text-white bg-[#062226]"
          }`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
