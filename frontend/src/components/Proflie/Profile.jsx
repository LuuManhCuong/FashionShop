import "./Profile.scss";
import {
  CreateSharp,
  PhoneCallback,
  Email,
  Password,
} from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userSelector } from "../../redux/selectors";
// import { reloadApiSlector } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { reloadApi } from "../../redux/reducer/adminSlice";

function Profile({ userInfo }) {
  // console.log(userInfo);
  const dispatch = useDispatch();

  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  // const reloadApi = useSelector(reloadApiSlector);

  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);
  const [phone, setPhone] = useState(userInfo.phone);
  const [address, setAddress] = useState(userInfo.address);
  const [gender, setGender] = useState(userInfo.gender || "male");
  const [nationally, setNationally] = useState(
    userInfo.nationally || "Việt Nam"
  );
  const [isAdmin, setIsAdmin] = useState(userInfo.isAdmin || 0);
  const [avatar, setAvatar] = useState([]);
  const [avt, setAvt] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleConverImg = (arr, cb) => {
    arr.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        cb((prev) => [...prev, reader.result]);
      };
    });
  };

  const onSubmit = (data) => {
    // console.log(data);
    handleConverImg(avatar, setAvt);
    axios
      .post(`http://localhost:5000/cloudinary-upload`, {
        avatar: avt,
      })
      .then((resCloud) => {
        let setData = {
          ...data,
          avatar: resCloud.data.avatarUrl.secure_url,
        };
        console.log("send: ", setData);
        axios
          .patch(
            `http://localhost:5000/update/user/${userInfo.idUser}`,
            setData,
            {
              headers: {
                token: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then((res) => {
            dispatch(reloadApi.actions.setReload());
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log("lỗi ko up dc ảnh");
      });
  };

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
                      isAdmin,
                      avatar,
                    };
                    onSubmit(data);
                  })}
                >
                  <div className="form-info">
                    <div className="form-avatar">
                      <div className="avatar-style">
                        <div className="avatar-view">
                          <label class="btnChangeAvt1" htmlFor="changeAvatar">
                            <img
                              className="avatar-info"
                              src={userInfo.avatar}
                              class="avatar img-circle img-thumbnail"
                              alt="avatar"
                            ></img>
                          </label>
                          <label class="btnChangeAvt" htmlFor="changeAvatar">
                            <CreateSharp />
                          </label>
                          <input
                            {...register("avatar", { required: true })}
                            id="changeAvatar"
                            hidden=""
                            type="file"
                            accept="image/png, image/jpeg"
                            name="avatar"
                            class="text-center center-block file-upload"
                            onChange={(e) => setAvatar([e.target.files[0]])}
                          ></input>

                          {errors.avatar?.type === "required" && (
                            <p style={{ color: "red" }} role="alert">
                              Vui lòng nhập trường này
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-name">
                      <div className="title-name">
                        <label className="lable-name">Username</label>
                        <div className="full-name">
                          <input
                            {...register("username", { required: true })}
                            className="input-fullname"
                            type="text"
                            value={username}
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            name="username"
                            placeholder={userInfo.username}
                          ></input>
                          {errors.username?.type === "required" && (
                            <p style={{ color: "red" }} role="alert">
                              Vui lòng nhập trường này
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="title-nickname">
                        <label className="lable-nickname">Address</label>
                        <div className="nick-name">
                          <input
                            {...register("address", { required: true })}
                            className="input-nickname"
                            type="text"
                            name="address"
                            placeholder={userInfo.address || "address"}
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          ></input>
                          {errors.address?.type === "required" && (
                            <p style={{ color: "red" }} role="alert">
                              Vui lòng nhập trường này
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="form-sex">
                      <label className="label-sex">Gender</label>

                      <select
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

                    <div class="form-sex">
                      <label className="label-sex">Admin</label>

                      <select
                        id=""
                        value={isAdmin}
                        onChange={(e) => {
                          setIsAdmin(e.target.value);
                        }}
                      >
                        <option value="0">false</option>
                        <option value={`1`}>true</option>
                      </select>
                    </div>

                    <div className="form-nation">
                      <label className="nation-name"> Nationally</label>

                      <div className="style-nation">
                        <select
                          name="nationally"
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
                    {...register("phone", { required: true })}
                    type="text"
                    class="form-number"
                    name="phone"
                    id="number-phone"
                    value={phone}
                    placeholder={userInfo.phone || "01244..."}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  ></input>
                  {errors.phone?.type === "required" && (
                    <p style={{ color: "red" }} role="alert">
                      Vui lòng nhập trường này
                    </p>
                  )}
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
                    {...register("email", { required: true })}
                    type="text"
                    class="form-number"
                    name="email"
                    id="number-phone"
                    placeholder={userInfo.email}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  {errors.email?.type === "required" && (
                    <p style={{ color: "red" }} role="alert">
                      Vui lòng nhập trường này
                    </p>
                  )}
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
                    {...register("password", { required: true })}
                    type="text"
                    class="form-number"
                    name="password"
                    id="number-phone"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  {errors.password?.type === "required" && (
                    <p style={{ color: "red" }} role="alert">
                      Vui lòng nhập trường này
                    </p>
                  )}
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
