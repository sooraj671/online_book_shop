import {useState, useEffect} from 'react';
import data from './data/data.json'
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const BookList = (props) =>{

    const [login, setLogin] = useState(false);
    const [books, setBooks] = useState([])

    const { Meta } = Card;

    const navigate = useNavigate();
    const buyBookFtn = ()=>{
        if(login)
        {
            navigate('/order_confirm')
        }
        else{
            alert('You must login first!')
            navigate('/login')
        }
    }

    useEffect(()=>{
        setBooks(data);
        console.log(props);
        if(localStorage.getItem('user') !== null){
            setLogin(true);
        }
    }, [])

    return (
        <div>  
            <br/>
                <div className="container-fluid mt-5">
                    <div className = "row text-center">
                        {
                            books.map(itm=>{
                                return(
                                    <div className="col-4 text-center" style={{padding: '3px', margin: '5px',border: '3px solid black', display: 'inline-block'}}>
                                        <Card
                                            hoverable
                                            style={{ width: 275 }}
                                            cover={<img alt="image" src="https://thumbs.dreamstime.com/b/blank-soft-color-book-standing-red-vertical-cover-black-background-isolated-clipping-path-around-d-illustration-187008688.jpg" />}
                                        >
                                            <Meta title={itm.title} description={itm.author} />
                                            <br/>
                                            <Button 
                                                type="primary" 
                                                htmlType="submit" 
                                                className="login-form-button" 
                                                style={{width:'100%'}} 
                                                onClick={buyBookFtn}
                                            >
                                                Buy book
                                            </Button>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        </div>
    )
}