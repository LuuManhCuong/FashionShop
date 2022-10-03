import './Profile.scss'
import {
    FavoriteBorder,
    ManageAccounts,
    AddShoppingCart,
    CreateSharp
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
                                            <label class="lable-day">Date of birth</label>
                                            <div class="day-style">
                                                <select className='select' name="day">
                                                    <option value="0">Day</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                </select>
                                                <select className='select' name="month">
                                                    <option value="0">Month</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                                <select className='select' name="year">
                                                    <option value="0">Year</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2009">2009</option>
                                                    <option value="2008">2008</option>
                                                    <option value="2007">2007</option>
                                                    <option value="2006">2006</option>
                                                    <option value="2005">2005</option>
                                                    <option value="2004">2004</option>
                                                    <option value="2003">2003</option>
                                                    <option value="2002">2002</option>
                                                    <option value="2001">2001</option>
                                                    <option value="2000">2000</option>
                                                    <option value="1999">1999</option>
                                                    <option value="1998">1998</option>
                                                    <option value="1997">1997</option>
                                                    <option value="1996">1996</option>
                                                    <option value="1995">1995</option>
                                                    <option value="1994">1994</option>
                                                    <option value="1993">1993</option>
                                                    <option value="1992">1992</option>
                                                    <option value="1991">1991</option>
                                                    <option value="1990">1990</option>
                                                    <option value="1989">1989</option>
                                                    <option value="1988">1988</option>
                                                    <option value="1987">1987</option>
                                                    <option value="1986">1986</option>
                                                    <option value="1985">1985</option>
                                                    <option value="1984">1984</option>
                                                    <option value="1983">1983</option>
                                                    <option value="1982">1982</option>
                                                    <option value="1981">1981</option>
                                                    <option value="1980">1980</option>
                                                    <option value="1979">1979</option>
                                                    <option value="1978">1978</option>
                                                    <option value="1977">1977</option>
                                                    <option value="1976">1976</option>
                                                    <option value="1975">1975</option>
                                                    <option value="1974">1974</option>
                                                    <option value="1973">1973</option>
                                                    <option value="1972">1972</option>
                                                    <option value="1971">1971</option>
                                                    <option value="1970">1970</option>
                                                    <option value="1969">1969</option>
                                                    <option value="1968">1968</option>
                                                    <option value="1967">1967</option>
                                                    <option value="1966">1966</option>
                                                    <option value="1965">1965</option>
                                                    <option value="1964">1964</option>
                                                    <option value="1963">1963</option>
                                                    <option value="1962">1962</option>
                                                    <option value="1961">1961</option>
                                                    <option value="1960">1960</option>
                                                    <option value="1959">1959</option>
                                                    <option value="1958">1958</option>
                                                    <option value="1957">1957</option>
                                                    <option value="1956">1956</option>
                                                    <option value="1955">1955</option>
                                                    <option value="1954">1954</option>
                                                    <option value="1953">1953</option>
                                                    <option value="1952">1952</option>
                                                    <option value="1951">1951</option>
                                                    <option value="1950">1950</option>
                                                    <option value="1949">1949</option>
                                                    <option value="1948">1948</option>
                                                    <option value="1947">1947</option>
                                                    <option value="1946">1946</option>
                                                    <option value="1945">1945</option>
                                                    <option value="1944">1944</option>
                                                    <option value="1943">1943</option>
                                                    <option value="1942">1942</option>
                                                    <option value="1941">1941</option>
                                                    <option value="1940">1940</option>
                                                    <option value="1939">1939</option>
                                                    <option value="1938">1938</option>
                                                    <option value="1937">1937</option>
                                                    <option value="1936">1936</option>
                                                    <option value="1935">1935</option>
                                                    <option value="1934">1934</option>
                                                    <option value="1933">1933</option>
                                                    <option value="1932">1932</option>
                                                    <option value="1931">1931</option>
                                                    <option value="1930">1930</option>
                                                    <option value="1929">1929</option>
                                                    <option value="1928">1928</option>
                                                    <option value="1927">1927</option>
                                                    <option value="1926">1926</option>
                                                    <option value="1925">1925</option>
                                                    <option value="1924">1924</option>
                                                    <option value="1923">1923</option>
                                                    <option value="1922">1922</option>
                                                    <option value="1921">1921</option>
                                                    <option value="1920">1920</option>
                                                    <option value="1919">1919</option>
                                                    <option value="1918">1918</option>
                                                    <option value="1917">1917</option>
                                                    <option value="1916">1916</option>
                                                    <option value="1915">1915</option>
                                                    <option value="1914">1914</option>
                                                    <option value="1913">1913</option>
                                                    <option value="1912">1912</option>
                                                    <option value="1911">1911</option>
                                                    <option value="1910">1910</option>
                                                    <option value="1909">1909</option>
                                                    <option value="1908">1908</option>
                                                    <option value="1907">1907</option>
                                                    <option value="1906">1906</option>
                                                    <option value="1905">1905</option>
                                                    <option value="1904">1904</option>
                                                    <option value="1903">1903</option>
                                                    <option value="1902">1902</option>
                                                    <option value="1901">1901</option>
                                                    <option value="1900">1900</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-sex">
                                            <label className="lable-sex">Sex</label>
                                            <div className='lable-radio'>
                                                <label className="Radio">
                                                    <input type="radio" name="gender" value="male"></input>
                                                    <span className="lable">Male</span>
                                                </label>
                                                <label className="Radio">
                                                    <input type="radio" name="gender" value="female"></input>
                                                    <span className="lable">Female</span>
                                                </label>
                                                <label className="Radio">
                                                    <input type="radio" name="gender" value="other"></input>
                                                    <span className="lable">Other</span>
                                                </label>
                                            </div>

                                        </div>

                                        <div className="form-nation">
                                            <label className="nation-name">Quốc tịch</label>
                                            
                                                <div className="input-nation">
                                                    <input className='nation'  name="nationality"  placeholder="Chọn quốc tịch" readonly="" value=""></input>
                                                </div>
                                            
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='line'></div>
                    </div>



                </div>
            </div>
        </div>

    )
}

export default Profile;
