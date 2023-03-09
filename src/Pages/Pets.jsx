import React, { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

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
    const newPet = { category, name, tags };
    const updatedPets = [...pets, newPet];
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
    setOpen(false);
    setCategory("");
    setName("");
    setTags("");
  };

  return (
    <div className={!localStorage.getItem("pets")?'pets':'petsActive'} >
      <Button className='openModal' variant="outlined" color="neutral" onClick={() => setOpen(true)}>
      {!localStorage.getItem("pets")?'Add A Pet':'Add Another Pet'}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog aria-labelledby="basic-modal-dialog-title" aria-describedby="basic-modal-dialog-description" sx={{ maxWidth: 500 }}>
          <Typography id="basic-modal-dialog-title" component="h2" style={{ textAlign: "center" }}>
            {!localStorage.getItem("pets")?'Add A Pet':'Add Another Pet'}
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
              <Button type="submit" >Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      
    </div>
  );
}

export default Pets;
