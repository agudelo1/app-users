import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

const INITIAL_PAGE = 1;

const UserList = ({ users, deleteUser, handleClickUpdateUser }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Cantidad de residentes por pagina, yo decido
  const USERS_PER_PAGE = 12;

  // cantidad total de paginas
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  //Residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * USERS_PER_PAGE;
  const sliceEnd = sliceStart + USERS_PER_PAGE;
  const usersInPage = users.slice(sliceStart, sliceEnd);

  //Generacion de un arreglo de las paginas que se van amostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [users]);

  return (
    <section className="flex flex-col mx-auto   w-full max-w-[1024px]  ">
      <section className="grid gap-6 justify-center grid-cols-[repeat(auto-fill,_260px)] items-center w-full ">
        {usersInPage.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            handleClickUpdateUser={handleClickUpdateUser}
          />
        ))}
      </section>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
export default UserList;
