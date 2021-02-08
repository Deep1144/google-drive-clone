import React from 'react'
import { Link } from 'react-router-dom'
import { Folder as FolderIcon } from 'react-feather';
import { Button } from 'react-bootstrap';
function Folder({ folder }) {
    return (
        <Button as={Link}
            to={{
                pathname: `/folders/${folder.id} `,
                state: { folder: folder }
            }}
            className='text-truncate w-100'>
            <FolderIcon className='mr-2' />
            {folder.name}
        </Button>
    )
}

export default Folder
