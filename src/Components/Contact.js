import {TwitterCircleFilled, MailFilled, InstagramFilled, FacebookFilled} from '@ant-design/icons';
import {Link} from 'react-router-dom';

export const Contact = () =>{
    return (
        <div style={{ 
             justifyContent:'center', alignItems:'center', paddingLeft: 300
            
        }}> 
            <div>
                <br/>
                    <h3>For any Query You can Contact us </h3>
                    Our Helpline Numbers are given below 
                    <br/>
                    Helpline: +92 340 6873893
                    <br/>
                    Helpline: +92 340 6873800
                    <br/>
                    in the given time: 9:00 AM to 7:00 PM
                </div>
                <br/>
                <div >
                    <h3>Our Social Media account Links</h3>
                    <Link to =""><MailFilled />onlinebooks@gmail.com</Link>
                    <br/>
                    <Link to =""><TwitterCircleFilled />online_book_shop</Link>
                    <br/>
                    <Link to =""><FacebookFilled />onlineBookShop</Link>
                    <br/>
                    <Link to =""><InstagramFilled />onlineBookShop</Link>
                </div>
        </div>
    )
}