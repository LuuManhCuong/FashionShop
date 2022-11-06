import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import styles from "./headerSearch.module.scss";
import Typewriter from "typewriter-effect";
import Menu from "../Menu/Menu";
import CartNoti from "../CartNoti/CartNoti";
import Noti from "../Noti/Noti";
import SearchItems from "../SearchItems/SearchItem";
import {fetchSearchApi} from '../../api/api'
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  TipsAndUpdates,
  TipsAndUpdatesOutlined,
} from "@mui/icons-material";
// import { getShopSuccessTest } from "../../redux/reducer/shopSlice";
import SearchProduct from "../searchProduct";

const cx = classNames.bind(styles);
function HeaderSearch() {
  const [keyWord, setKeyWord] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [showWiter, setShowWriter] = useState(false);
  const [showTippy, setShowTippy] = useState(false);

  useEffect(() => {
    keyWord.length === 0 ? setShowWriter(true) : setShowWriter(false);
    fetchSearchApi(keyWord)
    .then(res=>{
      setListSearch(res.data[0])
      setListProduct(res.data[1])
    })
  }, [keyWord]);
 
const outSize= ()=>{
    setShowTippy(false)
 }
  return (
    <div className={cx("header-search")}>
      <div className={cx("div logo")}>
        <Link to="/">
          <h1>Fashion.</h1>
        </Link>
      </div>
      {/* search */}
      <div className={cx("div search-wrap")}>
        <Tippy
          placement={"left-end"}
          onClickOutside={()=>outSize()}
          visible={showTippy&& listSearch.length !== 0 && listProduct.length !== 0}
          interactive={true}
          appendTo={document.body}
          trigger={'click'}
          render={(attrs) =>
            showTippy && (
              <div className="search-result" tabIndex="-1" {...attrs}>
                <div className="popover" style={{padding:'10px 5px'}}> 
                {
                listSearch.length === 0 && listProduct.length === 0 ? <h4>k tìm thấy cái m muốn tìm</h4> :''
                }
                { listSearch.length !== 0 ?  <h4 style={{fontSize:'20px'}}>Danh mục</h4>:''}
                  {
                    listSearch.map(function(value){
                      return <SearchItems items={{ to: "/blog", name: value.category }} />
                    })
                  }
                  {listProduct.length !== 0 ? <h4 style={{fontSize:'20px'}}>sản phẩm </h4>: ''}
                  {
                    listProduct.map((value)=>{
                     return <SearchProduct items={{ to: "/blog", name: value.name ,avatar:value.avatar ,}}  /> 
                    })
              } 
                </div>
              </div>
            )
          }
        >
          <input
            id="search-input"
            className={cx("search-input")}
            type="text"
            value={keyWord}
            onClick={()=>{
              setShowTippy(true)
            }}
            onFocus={() => {
              setShowWriter(false);
            }}
            onBlur={(e) => {
              let lengValue = e.currentTarget.value.length;
              setShowTippy(false);
              lengValue > 0 ? setShowWriter(false) : setShowWriter(true);
            }}
            onChange={(e) => {
              let lengValue = e.currentTarget.value.length;
              lengValue > 0 ? setShowTippy(true) : setShowTippy(false);
              setKeyWord(e.target.value);
              
            }}
          />
        </Tippy>

        {showWiter && (
          <Typewriter
            options={{
              strings: [
                "What do you need?",
                "Men's Fashion...",
                "Women's Fashion...",
              ],
              autoStart: true,
              pauseFor: 2000,
              loop: true,
            }}
          />
        )}
        <button className={cx("search-btn")}>
          <SearchOutlined
            style={{ color: "white", width: "2rem", height: "2rem" }}
          ></SearchOutlined>
        </button>
      </div>

      {/* action */}
      <div className={cx("div action-btn")}>
        <ul>
          <li className={cx("cart")}>
            <TipsAndUpdates
              className={cx("dark-active")}
              style={{ width: "2rem", height: "2rem" }}
              onClick={() => {
                document.querySelector(".global").classList.toggle("darkmode");
                console.log(document.querySelector(".global"));
              }}
            ></TipsAndUpdates>
            <TipsAndUpdatesOutlined
              className={cx("light-active")}
              style={{ width: "2rem", height: "2rem" }}
              onClick={() => {
                document.querySelector(".global").classList.toggle("darkmode");
                // console.log(document.querySelector(".global"));
              }}
            ></TipsAndUpdatesOutlined>
          </li>

          <li className={cx("cart")}>
            <FavoriteBorderOutlined
              style={{ width: "2rem", height: "2rem" }}
            ></FavoriteBorderOutlined>
            <span>10</span>
            <Noti />
          </li>
          <li className={cx("cart")}>
            <ShoppingCartOutlined
              style={{ width: "2rem", height: "2rem" }}
            ></ShoppingCartOutlined>
            <span>10</span>

            <CartNoti className={cx("cart-noti")}></CartNoti>
          </li>
          <li>
            <Menu />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderSearch;
