import React from 'react'
import NavBarComponent from './NavBar'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import AddFileButton from './AddFileButton'
import { useFolder } from '../hooks/useFolder'
import Folder from './Folder'
import { useParams, useLocation } from 'react-router-dom'
import CustomBreadCrumbs from './CustomBreadCrumbs'
import File from './File';
function Dashboard() {
    const { id } = useParams();
    // console.log({ folder }) 
    const { state = {} } = useLocation();
    const { folder, childFolders, childFiles } = useFolder(id, state.folder);
    // console.log({ state })
    return (
        <div>
            <NavBarComponent />
            <Container fluid>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                    <CustomBreadCrumbs currentFolder={folder} />
                    <div className='d-flex'>
                        <AddFileButton currentFolder={folder} />
                        <AddFolderButton currentFolder={folder} />
                    </div>
                </div>
                {/* {folder && <Folder folder={folder} />} */}
                {(childFolders.length > 0) && (
                    <div className='d-flex flex-wrap'>
                        {
                            childFolders.map(e => {
                                return <div key={e.id} style={{ maxWidth: '250px' }} className='p-2'>
                                    <Folder folder={e} />
                                </div>
                            })
                        }
                    </div>
                )}

                {childFolders.length > 0 && childFiles.length > 0 && <hr />}
                {childFiles.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFiles.map(childFile => (
                            <div
                                key={childFile.id}
                                style={{ maxWidth: "250px" }}
                                className="p-2"
                            >
                                <File file={childFile} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>

        </div>
    )
}

export default Dashboard
