import { useForm } from "react-hook-form";
import { EMPTY_FORM_VALUES } from "../shared/constants";
import { useEffect } from "react";

const ModalForm = ({
  isShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  setisShowModal,
  setIsUserToUpdate,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (isUserToUpdate) {
      updateUser(data, reset);
    } else {
      createUser(data, reset);
    }
  };
  const handleClickCloseModal = () => {
    setisShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setIsUserToUpdate(null);
  };

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate);
    }
  }, [isUserToUpdate]);
  return (
    <section
      className={`fixed z-50  bg-black/50 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-200 ${
        isShowModal
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      } `}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white grid gap-4 p-2 rounded-md relative sm:w-[400px] sm:h-[500px] sm:p-8 font-fira-Code"
      >
        <button
          type="button"
          onClick={handleClickCloseModal}
          className="text-red-500 font-bold absolute top-1 right-2 "
        >
          X
        </button>
        <h2 className="text-center text-[25px]">
          {isUserToUpdate ? "Edit user" : "Create user"}
        </h2>
        <div className="grid">
          <label htmlFor="first_name">Firts name</label>
          <input
            className="px-[5px] outline-none border-[1px] border-black"
            id="first_name"
            type="text"
            {...register("first_name", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 25,
                message: "Length not allowed, maximum 25",
              },
              minLength: {
                value: 1,
                message: "Length not allowed, minimum 1",
              },
            })}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs">{errors.first_name.message}</p>
          )}
        </div>
        <div className="grid">
          <label htmlFor="last_name">Last name</label>
          <input
            className="px-[5px] outline-none border-[1px] border-black"
            id="last_name"
            type="text"
            {...register("last_name", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 25,
                message: "Length not allowed, maximum 25",
              },
              minLength: {
                value: 1,
                message: "Length not allowed, minimum 1",
              },
            })}
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs">{errors.last_name.message}</p>
          )}
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input
            className="px-[5px] outline-none border-[1px] border-black"
            id="email"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 150,
                message: "Length not allowed, maximum 150",
              },
              minLength: {
                value: 1,
                message: "Length not allowed, minimum 1",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            className="px-[5px] outline-none border-[1px] border-black"
            id="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 25,
                message: "Length not allowed, maximum 25",
              },
              minLength: {
                value: 1,
                message: "Length not allowed, minimum 1",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>
        <div className="grid">
          <label htmlFor="birthday">Birthday</label>
          <input
            className="px-[5px] outline-none border-[1px] border-black"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button className="rounded-sm bg-indigo-700 text-white p-2 sm:w-[200px] sm:mx-auto">
          {isUserToUpdate ? "Save changes" : "Create user"}
        </button>
      </form>
    </section>
  );
};
export default ModalForm;
