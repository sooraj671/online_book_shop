import {TwitterCircleFilled, MailFilled, InstagramFilled, FacebookFilled} from '@ant-design/icons';
import {Link} from 'react-router-dom';

export const Footer = ()=>{

    return (
        <div>
            <div className="footer_div" > 
                <div className="Left" style={{float: 'left'}}>
                    <h3>Contact Us</h3>
                    9:00 AM to 7:00 PM 
                    <br/>
                    Helpline: +92 340 6873893
                    <br/>
                    Helpline: +92 340 6873800
                </div>
                <div className="Right" style={{float: 'right'}}>
                    <Link to =""><MailFilled />onlinebooks@gmail.com</Link>
                    <br/>
                    <Link to =""><TwitterCircleFilled />online_book_shop</Link>
                    <br/>
                    <Link to =""><FacebookFilled />onlineBookShop</Link>
                    <br/>
                    <Link to =""><InstagramFilled />onlineBookShop</Link>
                </div>
            </div>
        </div>
    )
}