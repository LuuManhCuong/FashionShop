import './Contact.scss'
import{
    MyLocationOutlined,
    ContactPhone,
    AlternateEmail,
}from "@mui/icons-material";

function Contact() {
    return (
        <div class="container px-4 text-center">
            <div class="row gx-5">
                <div class="col-lg-5">
                    <div class="p-3">
                        <h4 className='h4-1'>Contacts Us</h4>

                        <p className='p-h4-1'>Contrary to popular belief, Lorem Ipsum is simply random
                            text. It has roots in a piece of classical Latin literature from 45
                            BC, maki years old.</p>

                        <div className='card-1'>
                            <div class="card-body">
                                <div className='location-icon'><MyLocationOutlined style={{width: '3rem', height: '3rem'}}></MyLocationOutlined></div>
                                <div className='location-text'>
                                    <span style={{color: "rgb(152, 149, 149)"}}>Address: </span>
                                    <p>33 Xo Viet Nghe Tinh</p>
                                </div>
                                
                            </div>
                            <div class="card-body">
                                <div className='location-icon'><ContactPhone style={{width: '3rem', height:'3rem'}}></ContactPhone></div>
                                <div className='location-text'>
                                    <span style={{color: "rgb(152, 149, 149)"}}>Phone: </span>
                                    <p>+ 032 9161 255</p>
                                </div>
                                
                            </div>
                            <div class="card-body">
                                <div className='location-icon'><AlternateEmail style={{width: '3rem', height: '3rem'}}></AlternateEmail></div>
                                <div className='location-text'>
                                    <span style={{color: "rgb(152, 149, 149)"}}>Email: </span>
                                    <p>Fashionshop@gmail.com</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row2 col-lg-6">
                    <div class="p-3">
                        <h4 className='h4-2'>Leave A Comment</h4>
                        <p className='p-h4'>Our staff will call back later and answer your question.</p>

                        <div className='input'>
                            <div className='input-name'>
                                <input className='name' type="text" placeholder='Your name'></input>
                            </div>
                            <div className='input-email'>
                                <input className='email' type="text" placeholder='Your email'></input>
                            </div>
                            <div className='input-message'>
                                <input className='message' type="text" placeholder='Your message'></input>
                            </div>
                        </div>

                        <div className='box-send'>SEND MESSAGE</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact