import React, { useState, useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StoreContext } from '../Context/StoreContext';

function StoreFavorites() {
    const { handleToggleFavorite, favorites, styles } = useContext(StoreContext);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        < div>
            <Button variant="contained" onClick={handleClickOpen} sx={{height:55}} > 
                Favorites
            </Button>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>
                    <Typography variant="h4" sx={{cursor:"default"}}>Favorites</Typography>
                </DialogTitle>

                <DialogContent>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
                        {favorites.length > 0 ? (
                            favorites.map(favorite => ( 
                                <Card key={favorite.id} style={{ ...styles.root, marginBottom: "20px", marginRight: '20px', width: '220px', height: "320px" }}>
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
                                            style={{ background: "red", marginTop: "5px"}}
                                            variant="contained"
                                            className={`${styles.favoriteButton} ${styles.favoriteButtonSelected}`}
                                            startIcon={<FavoriteIcon />}
                                            onClick={() => handleToggleFavorite(favorite.id)}
                                        >
                                            Remove 
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <Typography variant="h5" sx={{ textAlign: 'center', color: 'gray', mt: 2 ,cursor:"default"}}>
                                You have not selected any pets
                            </Typography>
                        )}
                    </div>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default StoreFavorites;
