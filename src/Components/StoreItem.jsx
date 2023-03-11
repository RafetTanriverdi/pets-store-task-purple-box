import React, {useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StoreContext } from '../Context/StoreContext';



function StoreItem() {
  const {handleToggleFavorite,favorites,products,styles} = useContext(StoreContext);

  return (
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px'}}>

      {products.map(product => (
         products.find(p => p.id === product.id) === product && (
        <Card key={product.id} style={{...styles.root, marginBottom: '20px'}}>
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
      
 
  );
}

export default StoreItem;
