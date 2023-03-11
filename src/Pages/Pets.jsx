import React, { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import PetsTable from './PetsTable';


function Pets() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem("pets"));
    if (storedPets) {
      setPets(storedPets);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = { id: Date.now(),category, name, tags };
    const updatedPets = [...pets, newPet];
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
    setCategory("");
    setName("");
    setTags("");
    setOpen(false);
  };
  
  let storageControl= (!localStorage.getItem("pets")|| pets.length === 0 )

  return (
   <div style={{position :"relative", width:"100%",height:"100%"}}>
    <div className={storageControl?'pets':'petsActive'} >
      <Typography id="basic-modal-dialog-title" component="h1" style={{ textAlign: "start" , margin:"0px 0px 25px 0px" ,fontSize:"25px"}}>
      {storageControl?'':'My Pets'}
        </Typography>
      <Button className='openModal' variant="solid" color="primary" onClick={() => setOpen(true)}>
      {storageControl?'Add A Pet':'Add Another Pet'}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog aria-labelledby="basic-modal-dialog-title" aria-describedby="basic-modal-dialog-description" sx={{ maxWidth: 500 }}>
          <Typography id="basic-modal-dialog-title" component="h2" style={{ textAlign: "center" }}>
            {storageControl?'Add A Pet':'Add Another Pet'}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Input autoFocus required value={category} onChange={(e) => setCategory(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input required value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Input required value={tags} onChange={(e) => setTags(e.target.value)} />
              </FormControl>
              <Button type="submit" >Add</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </div>
    {!storageControl? <div className='petsTable'><PetsTable pets={pets}  /></div>:null}
   </div>
  );
}

export default Pets;