import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CustomBreadCrumbs({ currentFolder }) {
    // console.log({ currentFolder })
    const path = currentFolder ? currentFolder.path || [] : [];

    return (
        <Breadcrumb listProps={{ className: 'bg-white pl-0 m-0' }}>
            {
                path.map((e, i) => {
                    return (
                        <BreadcrumbItem linkAs={Link}
                            linkProps={{
                                to: {
                                    pathname: e.id ? `/folders/${e.id}` : '/',
                                    state: { folder: { ...e, path: path.slice(0, i) } }
                                }
                            }}
                            key={e.id} className='text-truncate d-inline-block' style={{ maxWidth: '200px' }}>
                            {e.name}
                        </BreadcrumbItem>
                    )
                })
            }
            {
                currentFolder && (
                    <BreadcrumbItem className='text-truncate d-inline-block' active style={{ maxWidth: '200px' }}>
                        {currentFolder.name}
                    </BreadcrumbItem>

                )
            }
        </Breadcrumb>
    )
}

export default CustomBreadCrumbs
