import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, patchProd } from '../../features/productSlice';
import style from './oneauction.module.css';
import io from 'socket.io-client';
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
        <div className={style.main}>
            {products.map((product) => {
                if (id === product._id) {
                    return <div className={style.oneMain} key={product._id}>
                        <div className={style.oneImg}><img alt='asdada' src={`${product.image}`} /></div>
                        <div className={style.oneName}>{product.name}</div>
                        <div className={style.oneDes}>{product.description}</div>
                        <div className={style.onePrice}>{product.priceStart}</div>
                    </div>
                }
                return null;
            })}
            <div>
                <input value={priceStart} onChange={(e) => setPriceStart(e.target.value)} />
                <button onClick={() => { handle(id, priceStart) }}>x</button>
            </div>
        </div>
    </>
    );
};

export default OneAuction;