import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import ModalForm from "./components/ModalForm";
import UserList from "./components/UserList";
import { EMPTY_FORM_VALUES } from "./shared/constants";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModal, setisShowModal] = useState(false);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers();
        Swal.fire({
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        setisShowModal(!isShowModal);
        reset(EMPTY_FORM_VALUES);
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (userUpdated, reset) => {
    axios
      .patch(BASE_URL + `users/${userUpdated.id}/`, userUpdated)
      .then(() => {
        getAllUsers();
        setisShowModal(false);
        Swal.fire({
          icon: "success",
          title: "User updated successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        reset(EMPTY_FORM_VALUES);
        setIsUserToUpdate(null);
      })
      .catch((err) => console.log(err));
  };
  const deleteUser = (idUser, first_name, last_name) => {
    Swal.fire({
      title: `Are you sure you want to delete ${first_name} ${last_name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          timer: 1000,
        });
        axios
          .delete(BASE_URL + `users/${idUser}/`)
          .then(() => getAllUsers())
          .catch((err) => console.log(err));
      }
    });
  };

  const handleClickUpdateUser = (user) => {
    setisShowModal(true);
    setIsUserToUpdate(user);
  };
  const handleclickOpenModal = () => {
    setisShowModal(true);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <main className="bg-gray-300/50 min-h-screen ">
      <header className="fixed top-0 left-0 w-full bg-white p-4 px-8 font-fira-Code shadow-md z-50">
        <div className="flex justify-between items-center min-w-[260px] sm:mx-auto sm:w-[500px]">
          <h1 className="text-[30px]">Users</h1>
          <button
            className=" bg-indigo-600 text-white p-2 px-4 rounded-md flex items-center justify-center gap-1"
            onClick={handleclickOpenModal}
          >
            <i className="text-lg bx bx-user-plus"></i> New user
          </button>
        </div>
      </header>

      <main className=" mt-16 grid gap-4 py-8 font-fira-Cod">
        <ModalForm
          isShowModal={isShowModal}
          createUser={createUser}
          isUserToUpdate={isUserToUpdate}
          updateUser={updateUser}
          setisShowModal={setisShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
        />
        {users.length > 0 ? (
          <UserList
            users={users}
            deleteUser={deleteUser}
            handleClickUpdateUser={handleClickUpdateUser}
          />
        ) : (
          <div className=" font-fira-Code flex flex-col gap-10 justify-center items-center">
            <h2 className="  text-xl flex items-center gap-2 ">
              <i className="bx bx-user-circle"></i>Add users
            </h2>
            <p>Start now to create users</p>
          </div>
        )}
      </main>
    </main>
  );
}

export default App;
