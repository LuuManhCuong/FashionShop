import "./action.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  DeleteForeverOutlined,
  Edit,
  GroupRemove,
  Email,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../redux/selectors";
import { reloadApi } from "../../redux/reducer/adminSlice";

// import { useForm } from "react-hook-form";
import Profile from "../Proflie/Profile";
import { HOT_URL } from "../../api/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// action item là thông tin tương ứng với user
function Action({ item, showInfoUser }) {
  const navigate = useNavigate();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [opens, setOpens] = React.useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();
  // const onSubmit = (data) => console.log("send", data);
  const handleDeleteUser = (id) => {
    fetch(`${HOT_URL}/admin/delete/user/${id}`, {
      method: "DELETE",
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    })
      .then(() => {
        dispatch(reloadApi.actions.setReload());
      })
      .catch((err) => {
        navigate("/login");
      });
    setOpen(false);
  };

  const handleDeleteProduct = (id) => {
    fetch(`${HOT_URL}/admin/delete/product/${id}`, {
      method: "DELETE",
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    })
      .then(() => {
        dispatch(reloadApi.actions.setReload());
      })
      .catch((err) => {
        navigate("/login");
      });
    setOpen(false);
  };
  return (
    <div className="action-container">
      <div>
        <button onClick={handleOpen}>
          <DeleteForeverOutlined className="delete-btn" />
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {showInfoUser
                ? "Bạn có chắc chắn muốn xóa người dùng này ?"
                : "Bạn có chắc chắn muốn xóa sản phẩm này ?"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {showInfoUser ? (
                <>
                  <h3>
                    <GroupRemove className="ion-btn"></GroupRemove>{" "}
                    {item.username}
                  </h3>
                  <h3>
                    <Email className="ion-btn"></Email> {item.email}
                  </h3>
                </>
              ) : (
                <div className="delete-product-block">
                  <img src={item.avatar} alt="img" />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <p>{item.price} $</p>
                    <p>
                      {item.gender} / {item.category}
                    </p>
                  </div>
                </div>
              )}
            </Typography>
            <div className="btn-wrap">
              {showInfoUser ? (
                <button
                  onClick={() => handleDeleteUser(item.idUser)}
                  className="btn-submit dltBtn"
                >
                  Delete
                </button>
              ) : (
                <button
                  onClick={() => handleDeleteProduct(item.idProduct)}
                  className="btn-submit dltBtn"
                >
                  Delete
                </button>
              )}

              <button onClick={handleClose} className="btn-submit cancelBtn">
                Cancel
              </button>
            </div>
          </Box>
        </Modal>
      </div>

      {showInfoUser ? (
        <button onClick={handleOpens}>
          <Edit className="edit-btn" />
        </button>
      ) : (
        <button>
          <Edit className="edit-btn" />
        </button>
      )}

      <div>
        <Modal
          open={opens}
          onClose={handleCloses}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h3 style={{ paddingLeft: "30px", fontWeight: "600" }}>
                Chỉnh sửa thông tin người dùng
              </h3>
            </Typography>
            <Profile userInfo={item}></Profile>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Action;
