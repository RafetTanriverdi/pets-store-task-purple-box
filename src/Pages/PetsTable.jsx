import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, InputLabel } from '@mui/material';
import { Modal, ModalDialog, Stack, FormControl, FormLabel, Input } from '@mui/joy';



function PetsTable(props) {
  const [pets, setPets] = useState(props.pets);
  const [selectedPet, setSelectedPet] = useState(null);
  const [open, setOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedTags, setEditedTags] = useState("");


 

  useEffect(() => {
    const intervalId = setInterval(() => {
    const storedPets = JSON.parse(localStorage.getItem("pets"));
    if (storedPets) {
      setPets(storedPets);
    }
  },1000)
  return () => clearInterval(intervalId);
  }, []);

  const handleDelete = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
    if (updatedPets.length === 0) {
      document.getElementById("dataGrid").style.display = "none";
      window.location.reload();
    }

  };
  const handleEdit = (params) => {
    setSelectedPet(params.row);
    setEditedName(params.row.name);
    setEditedCategory(params.row.category);
    setEditedTags(params.row.tags);
    setOpen(true);
  };

  const handleSave = () => {
    const updatedPets = pets.map((pet) =>
      pet.id === selectedPet.id
        ? {
          ...pet,
          name: editedName,
          category: editedCategory,
          tags: editedTags,
        }
        : pet
    );
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
    setSelectedPet(null);
    setOpen(false);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'tags', headerName: 'Tags', flex: 1 },
    {
      field: "action",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => {
        return (
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleEdit(params)}
          >
            Update my pet
          </Button>
        );
      },
    },
    {
      field: "actions",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => {
        return (
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        );
      },
    },
  ];
    return (
      <>
        {pets.length > 0 ?( 
          <div className="petsTable" id="dataGrid">
            <DataGrid style={{background:"#fff"}}
              sx={{ width: "90%", margin: "0 auto" }}
              rows={pets}
              columns={columns}
            />
            <Dialog open={open} onClose={handleModalClose}   >
              <div style={{ padding: "15px 25px" }}>
  
                <DialogTitle sx={{ mb: 1, textAlign: "center" }}> Update Pet</DialogTitle>
                <DialogContent className='uptadeModal'  >
  
                  <FormControl fullWidth sx={{ mb: 2 }}  >
                    <InputLabel>Category</InputLabel>
                    <Input value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Name</InputLabel>
                    <Input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                  </FormControl>
                  <FormControl fullWidth >
                    <InputLabel>Tags</InputLabel>
                    <Input value={editedTags} onChange={(e) => setEditedTags(e.target.value)} />
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleModalClose}>Cancel</Button>
                  <Button onClick={handleSave} variant="contained" color="primary">
                    Uptade
                  </Button>
                </DialogActions>
              </div>
            </Dialog>
          </div>)
  
          : null}
      </>
  
    );
   

  

}

export default PetsTable