import "./Profile.scss";
import {
  // FavoriteBorder,
  // ManageAccounts,
  // AddShoppingCart,
  CreateSharp,
  PhoneCallback,
  Email,
  Password,
} from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [nationally, setNationally] = useState("");
  const [isAdmin, setIsAdmin] = useState(0);
  const [avatar, setavatar] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <div class="row g-0 text-center">
        <div className="detail  col-10 col-md-12">
          <div className="detail-nam0e">Account infomation</div>

          <div className="detail-container">
            <div className="info">
              <span>Personal infomation</span>

              <div className="detail-info">
                <form
                  onSubmit={handleSubmit(() => {
                    let data = {
                      username,
                      email,
                      password,
                      address,
                      gender,
                      nationally,
                      phone,
                      avatar,
                      isAdmin,
                    };
                    onSubmit(data);
                  })}
                >
                  <div className="form-info">
                    <div className="form-avatar">
                      <div className="avatar-style">
                        <label htmlFor="ChangeAvatar" className="avatar-view">
                          <label class="btnChangeAvt1" htmlFor="ChangeAvatar">
                            <img
                              className="avatar-info"
                              src="avatar"
                              class="avatar img-circle img-thumbnail"
                              alt="avatar"
                            ></img>
                          </label>
                          <label class="btnChangeAvt" htmlFor="changeAvatar">
                            <CreateSharp />
                          </label>
                          <input
                            required={true}
                            id="changeAvatar"
                            hidden=""
                            type="file"
                            accept="image/png, image/jpeg"
                            name="avatar"
                            class="text-center center-block file-upload"
                            onChange={(e) => setavatar(e.target.files)}
                          ></input>
                        </label>
                      </div>
                    </div>
                    <div className="form-name">
                      <div className="title-name">
                        <label className="lable-name">Full name</label>
                        <div className="full-name">
                          <input
                            required={true}
                            className="input-fullname"
                            type="text"
                            value={username}
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            name="full name"
                            placeholder="full name"
                          ></input>
                        </div>
                      </div>
                      <div className="title-nickname">
                        <label className="lable-nickname">Address</label>
                        <div className="nick-name">
                          <input
                            required={true}
                            className="input-nickname"
                            type="text"
                            name="nick name"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    {/* 
                    <div class="form-day">
                      <label class="label-day">Date of birth</label>
                      <input
                        required={true} className="style-date" type="date"></input>
                    </div> */}

                    <div class="form-sex">
                      <label className="label-sex">Gender</label>

                      <select
                        name="gender"
                        id=""
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="orther">Orther</option>
                      </select>
                    </div>

                    <div className="form-nation">
                      <label className="nation-name"> Nationally</label>

                      <div className="style-nation">
                        <select
                          name="gender"
                          id=""
                          value={nationally}
                          onChange={(e) => {
                            setNationally(e.target.value);
                          }}
                          className="select-nation"
                        >
                          <option value="VietNam">Việt Nam</option>
                          <option value="My">Mỹ</option>
                          <option value="Duc">Đức</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-nation">
                      <label className="nation-name">Admin</label>

                      <div className="style-nation">
                        <select
                          name="isAdmin"
                          id=""
                          value={isAdmin}
                          onChange={(e) => {
                            setIsAdmin(e.target.value);
                          }}
                          className="select-nation"
                        >
                          <option value="1">True</option>
                          <option value="0">false</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-button">
                      <button className="button-apply" type="submit">
                        Save change
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="line"></div>

            <div className="save-detail">
              <span className="update-detail">Update</span>
              <div className="container-phone">
                <label className="number-phone" for="number-phone">
                  <div className="icon-phone">
                    <PhoneCallback style={{ width: "2rem", height: "2rem" }}>
                      {" "}
                    </PhoneCallback>
                  </div>
                </label>
                <div className="detail-phone">
                  <span className="title-phone">Phone number</span>
                  <br></br>
                  <input
                    required={true}
                    type="text"
                    class="form-number"
                    name="numberPhone"
                    id="number-phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="container-phone">
                <label className="number-phone" for="number-phone">
                  <div className="icon-phone">
                    <Email style={{ width: "2rem", height: "2rem" }}> </Email>
                  </div>
                </label>
                <div className="detail-phone">
                  <span className="title-phone">Email</span>
                  <br></br>
                  <input
                    required={true}
                    type="text"
                    class="form-number"
                    name="numberPhone"
                    id="number-phone"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="container-phone">
                <label className="number-phone" for="number-phone">
                  <div className="icon-phone">
                    <Password style={{ width: "2rem", height: "2rem" }}>
                      {" "}
                    </Password>
                  </div>
                </label>
                <div className="detail-phone">
                  <span className="title-phone">Password</span>
                  <br></br>
                  <input
                    required={true}
                    type="text"
                    class="form-number"
                    name="numberPhone"
                    id="number-phone"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
