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
import { reloadApiSlector } from "../../redux/selectors";
import { reloadApi } from "../../redux/reducer/adminSlice";

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

function Action({ item, showInfoUser }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/admin/delete/user/${id}`, {
      method: "DELETE",
    }).then(() => {
      // console.log("xóa thành công: ");
      dispatch(reloadApi.actions.setReload());
    });
    setOpen(false);
  };

  const handleDeleteProduct = (id) => {
    console.log("id product dlete: ", id);

    fetch(`http://localhost:5000/admin/delete/product/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("xóa thành công: ");
      dispatch(reloadApi.actions.setReload());
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

      <button>
        <Edit className="edit-btn" />
      </button>
    </div>
  );
}

export default Action;
