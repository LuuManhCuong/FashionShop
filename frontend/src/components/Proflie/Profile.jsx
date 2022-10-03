import './Profile.scss'
import {
    FavoriteBorder,
    ManageAccounts,
    AddShoppingCart,
    CreateSharp,
    ContactPhone
} from '@mui/icons-material';
function Profile() {
    return (

        <div className='container'>
            <div class="row g-0 text-center">
                <div class="col-sm-6 col-md-3">
                    <div className='account-avatar'>
                        <img className='avatar' src="../avatar4.jpg" alt="avatar"></img>
                        <div className='account'>Account of <br /><strong>Username</strong></div>
                    </div>

                    <ul className='list-name'>
                        <li className='li-is-active'>
                            <a className='is-active' href="/profile">
                                <ManageAccounts style={{ width: "3rem", height: "3rem", float: "left", marginLeft: "40px", color: "#3399FF" }}></ManageAccounts>
                                <span>Account infomation</span>
                            </a>
                        </li><br />
                        <li className='li-order'>
                            <a className='order' href="/profile">
                                <AddShoppingCart style={{ width: "3rem", height: "3rem", float: "left", marginLeft: "40px", color: "	#009966" }}></AddShoppingCart>
                                <span>Order management</span>
                            </a>
                        </li> <br />
                        <li className='li-favorite'>
                            <a className='favotite' href="/profile">
                                <FavoriteBorder style={{ width: "3rem", height: "3rem", float: "left", marginLeft: "40px", color: "red" }}></FavoriteBorder>
                                <span>Favorite product</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="detail col-6 col-md-9">

                    <div className='detail-name'>Account infomation</div>

                    <div className='detail-container'>

                        <div className='info'>
                            <span>Personal infomation</span>

                            <div className='detail-info'>
                                <form>
                                    <div className='form-info'>
                                        <div className='form-avatar'>
                                            <div className='avatar-style'>
                                                <div className='avatar-view'>
                                                    <img className='avatar-info' src='../avatar' alt='avatar'></img>
                                                    <div className='avatar-update'>
                                                        <CreateSharp style={{ width: "2rem", height: "2rem", color: "white" }}></CreateSharp>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-name'>
                                            <div className='title-name'>
                                                <label className='lable-name'>Full name</label>
                                                <div className='full-name'>
                                                    <input className='input-fullname' type="text" name='full name' placeholder='full name'></input>
                                                </div>
                                            </div>
                                            <div className='title-nickname'>
                                                <label className='lable-nickname'>Nick name</label>
                                                <div className='nick-name'>
                                                    <input className='input-nickname' type="text" name='nick name' placeholder='nick name'></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-day">
                                            <label class="label-day">Date of birth</label>
                                            <input className='style-date' type="date" ></input>
                                        </div>

                                        <div class="form-sex">
                                            <label className="label-sex">Sex</label>
                                            <div className='label-radio'>
                                                <label className="Radio">
                                                    <input type="radio" name="gender" value="male"></input>
                                                    <span className="label">Male</span>
                                                </label>
                                                <label className="Radio">
                                                    <input type="radio" name="gender" value="female"></input>
                                                    <span className="label">Female</span>
                                                </label>
                                                <label className="Radio">
                                                    <input type="radio" name="gender" value="other"></input>
                                                    <span className="label">Other</span>
                                                </label>
                                            </div>

                                        </div>

                                        <div className="form-nation">
                                            <label className="nation-name"> Nationally</label>

                                            <div className='style-nation'>
                                                <select className='select-nation' >
                                                    <option value="VietNam">Việt Nam</option>
                                                    <option value="My">Mỹ</option>
                                                    <option value="Duc">Đức</option>

                                                </select>
                                            </div>

                                        </div>

                                        <div className='form-button'>
                                            <button className='button-apply' type='submit'>Save change</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='line'></div>

                        <div className='save-detail'>
                            <span>Số điện thoại và Email</span><br />
                            <div>
                                <div className='duy'>
                                    <div className='container-save-detail'>
                                        <div className='phone'>
                                            <div className='phone-icon'><ContactPhone /></div>

                                            <div className='phone-detail'>
                                                <span>Phone number</span> <br />
                                                <span>0329161255</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btm-phone'>
                                        <button className='button-phone' type='submit'>Update</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </div>

    )
}

export default Profile;
