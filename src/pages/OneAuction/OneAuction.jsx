import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, patchProd } from '../../features/productSlice';
import style from './oneauction.module.css';
import io from 'socket.io-client';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const socket = io.connect("http://localhost:3030");

const OneAuction = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const products = useSelector(state => state.product.product);
    const [priceStart, setPriceStart] = useState('');
    const handle = (id, priceStart) => {
        socket.emit("disp_pat", { id, priceStart })
        setPriceStart('');
    }

    useEffect(() => {
        socket.on("receive", (data) => {
            dispatch(patchProd({ id: data.id, priceStart: data.priceStart }))
        })
        dispatch(fetchProduct());
    }, [dispatch]);

    return (<>
        <Header />
        <div className={style.main}>
            {products.map((product) => {
                if (id === product._id) {
                    return <div className={style.oneMain} key={product._id}>
                        <div className={style.oneName}><h2>{product.name}</h2></div>
                        <div className={style.oneDis}>
                            <div className={style.oneImg}><img alt='asdada' src={`${product.image}`} /></div>
                            <div className={style.oneDes}>{product.description}</div>
                        </div>
                        <div className={style.onePrice}><h4>Ставка: {product.priceStart}$</h4></div>
                        <div className={style.oneWin}>{product.bet.map((user) => {
                            return <h6>Последнюю ставку сделал пользователь: {user.firstName}</h6>
                        })}</div>
                    </div>
                }
                return null;
            })}
            <div className={style.inputer}>
                <input type='number' placeholder='Введите сумму' value={priceStart} onChange={(e) => setPriceStart(e.target.value)} />
                <button onClick={() => { handle(id, priceStart) }}>x</button>
            </div>
        </div>
        <Footer />
    </>
    );
};

export default OneAuction;