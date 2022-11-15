import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./BlogPost.scss";
import { useForm } from "react-hook-form";
// import cloudinaryUpload from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// import { URL } from " ../../../src/api/api";

const cx = classNames.bind(styles);

function BlogPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const category = ["Fashion", "Travel", "Modle", "Music"];

  const [onsend, setOnSend] = useState(false);
  const [image, setImage] = useState("");
  const [field, setField] = useState(
    category[Math.ceil(Math.random() * category.length)]
  );
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit1 = async () => {
    if (!onsend) {
      sendData();
    }

    function sendData() {
      setOnSend(true);
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "mpght0dj");
      axios
        .post("https://api.cloudinary.com/v1_1/djcamu6kz/upload", data)
        .then((res) => {
          return res.data.secure_url;
        })
        .then((res) => {
          fetch("http://localhost:5000/blog", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({
              field,
              content,
              title,
              image: res,
            }),
          });
        })
        .then((res) => {
          setOnSend(false);
          setField("");
          setContent("");
          setTitle("");
          setImage("");
          toast.success(`🦄 Đã thêm thành công blog `, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch(() => {
          setOnSend(false);
          toast.error(`🦄 lỗi rồi  `, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          setField(data.field);
          handleSubmit1();
        })}
        className={cx("blogPost")}
      >
        <div className={cx("title")}>
          <h2>What do you think?</h2>
        </div>

        <div className={cx("wrap")}>
          <div className={cx("wrap-image")}>
            <div class="input-group mb-3">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label class="input-group-text" for="inputGroupFile01">
                  Image
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  class="form-control"
                  id="inputGroupFile01"
                  accept="image/png, image/jpeg"
                  name="image"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setImage(file);
                  }}
                ></input>
                <label
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "110px",
                    lineHeight: "100%",
                    marginTop: "5px",
                    padding: "3px",
                    width: "500px",
                    backgroundColor: "white",
                  }}
                  for="inputGroupFile01"
                >
                  {image ? image.name : "không có tệp nào được chọn"}
                </label>
              </div>
            </div>
            {errors.image && (
              <p style={{ color: "red", marginLeft: "10px", marginTop: "5px" }}>
                Vui lòng nhập trường này{" "}
              </p>
            )}
            {image && (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "10px 0 ",
                  position: "relative",
                  // padding: "4px",
                  left: "10px",
                }}
              >
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                  src={URL.createObjectURL(image)}
                  alt=""
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    fontSize: "13px",
                    transform: "translateY(-50%)  translateX(50%) ",
                    cursor: "pointer",
                    padding: "0 2px",
                    // borderRadius: "50%",
                  }}
                  className="close-imgPrev"
                  onClick={(e) => {
                    setImage("");
                  }}
                >
                  x
                </div>
              </div>
            )}
          </div>

          <div className={cx("wrap-field")}>
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
                Field
              </label>
              <select
                name="field"
                class="form-select"
                id="inputGroupSelect01"
                onChange={(e) => {
                  setField(e.target.value);
                }}
                {...register("field", { required: true })}
              >
                <option value="Fashion">Fashion</option>
                <option value="Travel">Travel</option>
                <option value="Modle">Modle</option>
                <option value="Music">Music</option>
              </select>
            </div>
            {errors.field && (
              <p style={{ color: "red", marginLeft: "10px", marginTop: "5px" }}>
                Vui lòng nhập trường này{" "}
              </p>
            )}
          </div>

          <div className={cx("wrap-title")}>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                Title
              </span>
              <input
                {...register("title", { required: true })}
                value={title}
                type="text"
                class="form-control"
                placeholder="title"
                aria-label="title"
                aria-describedby="addon-wrapping"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            {errors.title && (
              <p style={{ color: "red", marginLeft: "10px", marginTop: "5px" }}>
                Vui lòng nhập trường này
              </p>
            )}
          </div>

          <div className={cx("wrap-content")}>
            <div class="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                Content
              </span>
              <input
                {...register("Content", {
                  required: true,
                })}
                // {setValue('content',content)}
                type="text"
                value={content}
                class="form-control"
                aria-label="Content"
                aria-describedby="addon-wrapping"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></input>
            </div>
            {errors.Content && (
              <p style={{ color: "red", marginLeft: "10px", marginTop: "5px" }}>
                Vui lòng nhập trường này{" "}
              </p>
            )}
          </div>

          <div className={cx("submit")}>
            <button
              type="submit"
              className={cx(["submit-btn", { onSend: onsend }])}
              onClick={(e) => {
                setValue("title", title);
                setValue("content", content);
                // setValue("field", field);

                // e.preventDefault();
                if ((!image, !field, !content, !title)) {
                  setOnSend(false);
                  toast.error(`🦄 Hình như bạn đã quên nhập dữ liệu rồi `, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
                // handleSubmit1();
              }}
            >
              {onsend ? "đang tải ..." : "Gửi"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default BlogPost;
