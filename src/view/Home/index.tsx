import React, { useState, useEffect } from 'react';
import { Container, Header, Footer } from './style';
import api from '../../services/api';
import Logo from '../../components/images/logo-dragon.png';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
}

const Home: React.FC = () => {
    const [ data, setData ] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {
        const productStore = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, productStore)
    }

    return(
        <>
        <Header>
            <section>
                <img src={Logo} alt="Logo Dragão Vermelho" height="65px" />
                <h1>GeekStore</h1>
            </section>
        </Header>
        <Container>
            <section>
                { data.map( (prod, index) => (
                    <div className="product-content" key={prod.id}>
                        <img src={prod.photo} alt="iPhone 12 Pro" width="200px" height="auto" />
                        <h4>{prod.name}</h4>
                        <span>{prod.description}</span>
                        <h5>{prod.price}</h5>
                        <button onClick={ () => handleCart(index)}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </section>
        </Container>
        <Footer>
            <section>
                <p>Site criado por <a href="https://github.com/MatCrema" target="_blank" rel="noreferrer">Matheus Crema</a> para o Desafio#2 - <a href="https://www.hiringcoders.com.br" target="_blank" rel="noreferrer">Hiring Coders</a></p>
            </section>
        </Footer>
        </>
    );
}

export default Home;