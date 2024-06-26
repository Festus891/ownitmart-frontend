import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import Sidebar from "./Sidebar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  getUserDetails,
  clearErrors,
} from "../../actions/userAction";
import { UPDATE_USER_RESET } from "../../constants/userConstant";
const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { error, isUpdated } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (user && user._id !== id) {
      dispatch(getUserDetails(id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("User updated successfully");
      navigate("/admin/users");

      dispatch({
        type: UPDATE_USER_RESET,
      });
    }
  }, [dispatch, user, alert, error, isUpdated, navigate, id]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("role", role);

    dispatch(updateUser(user._id, formData));
  };
  return (
    <Fragment>
      <MetaData title={"Update user"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div class="row wrapper">
              <div class="col-10 col-lg-5">
                <form
                  class="sHhadow-lg"
                  onSubmit={submitHandler}
                  encType="multipart/form-data"
                >
                  <h1 className="mt-2 mb-5">Update User</h1>

                  <div className="form-group">
                    <label for="name_field">Name</label>
                    <input
                      type="name"
                      id="name_field"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label for="email_field">Email</label>
                    <input
                      type="email"
                      id="email_field"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label for="role_field">Role</label>

                    <select
                      id="role_field"
                      className="form-control"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn update-btn btn-block mt-4 mb-3"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateUser;
