import React, { useState } from 'react'
import { Button, Modal, Form, ModalBody, ModalFooter, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { Folder } from 'react-feather';
import { database } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { ROOT_FOLDER } from '../hooks/useFolder';

function AddFolderButton({ currentFolder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const { currentUser } = useAuth();
    console.log({currentUser})
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModel = () => {
        setIsOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        if (currentFolder === null) return null;
        const path = [...currentFolder.path]
        if (currentFolder !== ROOT_FOLDER) {
            path.push({ name: currentFolder.name, id: currentFolder.uid })
        }
        database.folders.add({
            name: name,
            userId: currentUser.uid,
            createdAt: database.getCurrentTimeStamp(),
            parentId: currentFolder.id,
            path
        })
        closeModel();
    }
    return (
        <>
            <Button onClick={openModal} variant='outline-success' size='sm'>
                <Folder size='12' />
            </Button>
            <Modal show={isOpen} onHide={closeModel}>
                <Form>
                    <ModalBody>
                        <FormGroup>
                            <FormLabel>Name</FormLabel>
                            <FormControl type='text' required value={name} onChange={e => setName(e.target.value)}></FormControl>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='danger' onClick={closeModel}>Close</Button>
                        <Button onClick={handleSubmit} variant='primary'>Add</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}

export default AddFolderButton
