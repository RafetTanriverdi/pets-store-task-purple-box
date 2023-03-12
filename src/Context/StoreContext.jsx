import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

    const styles = {
        root: {
          width: 320,
          height:380,
          
          
          margin: 'auto',
          '@media (minWidth:600px)': {
            maxWidth: 500,
          },
          '@media (minWidth:960px)': {
            maxWidth: 800,
            flexDirection: 'column',
          },
        },
        media: {
          height: 56,
          paddingTop: '56.25%', 
        },
        favoriteButton: {
          color: '#f44336',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: '#f44336',
            color: '#fff',
          },
        },
        favoriteButtonSelected: {
          color: '#fff',
          backgroundColor: '#f44336',
        },
      };
    

    const [products, setProducts] = useState([]);
    const [value, setvalue] = useState("available");



    useEffect(() => {

       

            axios(`https://petstore.swagger.io/v2/pet/findByStatus?status=${value}`)
            .then(res => {
                const updatedProducts = res.data.map(product => ({
                    ...product,
                    name: product.name || "Pets",
                    photoUrls: "https://i.guim.co.uk/img/media/03734ee186eba543fb3d0e35db2a90a14a5d79e3/0_173_5200_3120/master/5200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9c30ed97ea8731f3e2a155467201afe3"
                }));
                setProducts(updatedProducts);
            })


            
       


      
    }, [products]);


    const [favorites, setFavorites] = useState([]);

    const handleToggleFavorite = (productId) => {
        const productToAddOrRemove = products.find(product => product.id === productId);
        const isFavorite = favorites.some(favorite => favorite.id === productId);

        if (isFavorite) {
            setFavorites(favorites.filter(favorite => favorite.id !== productId));
        } else {
            setFavorites([...favorites, productToAddOrRemove]);
        }
    };

    return (
        <StoreContext.Provider value={{ products,favorites, handleToggleFavorite,styles,setvalue }}>
            {children}
        </StoreContext.Provider>
    );
};
