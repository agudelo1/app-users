const UserCard = ({ user, deleteUser, handleClickUpdateUser }) => {
  return (
    <article className="bg-[#FFFFFF] border-[2px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.20)] border-[#E5E5E5] w-[260px] rounded-md p-4 flex flex-col">
      <h2 className=" text-center mb-2 text-[20px] flex justify-center">
        {user.first_name}
      </h2>
      <h2 className="text-center mb-2 text-[20px] flex justify-center">
        {user.last_name}
      </h2>

      <hr className="border-[1px] border-[#E5E5E5]" />
      <ul className="p-2">
        <li className="grid gap-1 py-2  ">
          <span className="flex items-center gap-1">
            <i className="bx bx-envelope"></i>Email
          </span>
          <span className="text-sm ">{user.email}</span>
        </li>
        <li className="grid gap-1">
          <span className="flex items-center gap-1">
            <i className="bx bx-cake"></i>Birthday
          </span>
          <span className="text-sm">{user.birthday}</span>
        </li>
      </ul>
      <div className="flex justify-end gap-1 p-4">
        <button
          onClick={() => deleteUser(user.id, user.first_name, user.last_name)}
          className="bg-red-500 p-2 text-white rounded-md"
        >
          <i className="bx bx-trash"></i>
        </button>
        <button
          onClick={() => handleClickUpdateUser(user)}
          className="border-[1px] border-[#E5E5E5] bg-white p-2 text-black rounded-md ml-2"
        >
          <i className="bx bx-edit"></i>
        </button>
      </div>
    </article>
  );
};
export default UserCard;
