import {useState, useEffect} from 'react';
import { Input, Space } from 'antd';
import data from './data/data.json'
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const SearchBook =(props)=>{

    const { Search } = Input;
    const { Meta } = Card;

    const [book, setBook] = useState({
        title : "",
        author: "",
        price: ""
    });

    const [login, setLogin] = useState(false);

    const [title, setTitle] = useState('')
    const onSearchFtn = ()=>{
        data.forEach(i=>{
            if(i.title == title)
            {
                setBook(i);
            }
         })
    }
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
        console.log(props);
        if(localStorage.getItem('user') !== null){
            setLogin(true);
        }
    }, [])

    return(
        <>
            <div className="search_div">
                <br/>
                {/*<Space style={{float: 'center'}} direction="vertical">
                    <Search placeholder="input search tilte" style={{ width: 400 }} onSearch={onSearchFtn}/>
                </Space>*/}
                <input 
                placeholder="search by book tilte" value={title} 
                onChange={(e)=>{setTitle(e.target.value)}}
                style={{ width: 400 }}/>
                <Button type="primary" onClick={onSearchFtn}>Search</Button>
            </div>
            
            <br/>
            
            <div className="container-fluid mt-5" style={{float: 'center', paddingLeft: 200}}>
                <div className = "row text-center">
                    <div className="col-4 text-center" style={{padding: '3px', margin: '5px',border: '3px solid black', display: 'inline-block'}}>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img alt="image" src="https://thumbs.dreamstime.com/b/blank-soft-color-book-standing-red-vertical-cover-black-background-isolated-clipping-path-around-d-illustration-187008688.jpg" />}
                        >
                            <Meta title={book.title} description={book.author}  />
                            <p>Published In: {book.year}</p> 
                            <p>Language: {book.language} </p>
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
                </div>
            </div>
        </> 
    )
}