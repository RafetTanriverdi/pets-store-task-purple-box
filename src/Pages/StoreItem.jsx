import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

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
      flexDirection: 'column', // yeni stil
    },
  },
  media: {
    height: 56,
    paddingTop: '56.25%', // 16:9
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

function StoreItem() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {


    axios("https://petstore.swagger.io/v2/pet/findByStatus?status=pending")
    .then(res => {
      const updatedProducts = res.data.map(product => ({
        ...product,
        name: product.name || "Pets",
        photoUrls:"https://i.guim.co.uk/img/media/03734ee186eba543fb3d0e35db2a90a14a5d79e3/0_173_5200_3120/master/5200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9c30ed97ea8731f3e2a155467201afe3"
      }));
      setProducts(updatedProducts);
    })
      
      
  }, []);
  

  const handleToggleFavorite = (productId) => {
    const productToAddOrRemove = products.find(product => product.id === productId);
    const isFavorite = favorites.some(favorite => favorite.id === productId);

    if (isFavorite) {
      setFavorites(favorites.filter(favorite => favorite.id !== productId));
    } else {
      setFavorites([...favorites, productToAddOrRemove]);
    }
  };

  console.log(products);
  return (
    <div >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px'}}>

      {products.map(product => (
         products.find(p => p.id === product.id) === product && (
        <Card key={product.id} style={{...styles.root, marginTop: '20px'}}>
          <CardMedia
            style={styles.media}
            image={product.photoUrls}
            title={product.name}
            />
          <CardContent>
            <Typography variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography color="textSecondary">
              {product.status}
            </Typography>
            <Button
              style={favorites.some(favorite => favorite.id === product.id) ?{background:"red",marginTop:"8px"}:{background:"blue",marginTop:"8px"}}
              variant="contained"
              className={`${styles.favoriteButton} ${favorites.some(favorite => favorite.id === product.id) && styles.favoriteButtonSelected}`}
              startIcon={<FavoriteIcon />}
              onClick={() => handleToggleFavorite(product.id)}
            >
              {favorites.some(favorite => favorite.id === product.id) ? 'Remove' : 'Add '}
            </Button>
          </CardContent>
        </Card>)
      ))}
      </div>
      <Typography variant="h4">Favorites</Typography>
      {favorites.map(favorite => (
        <Card key={favorite.id} style={styles.root}>
          <CardMedia
            style={styles.media}
            image={favorite.photoUrls}
            title={favorite.name}
            />
          <CardContent>
            <Typography variant="h5" component="h2">
              {favorite.name}
            </Typography>
            <Typography color="textSecondary">
              {favorite.status}
            </Typography>
            <Button
              style={{background:"red"}}
              variant="contained"
              className={`${styles.favoriteButton} ${styles.favoriteButtonSelected}`}
              startIcon={<FavoriteIcon />}
              onClick={() => handleToggleFavorite(favorite.id)}
            >
              Remove from Favorites
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default StoreItem;
