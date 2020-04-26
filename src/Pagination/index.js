import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

export default ({ handleClick, numberEntities, rowsPerPage, active }) => {
    const pagesNumber = Math.ceil(numberEntities / rowsPerPage)

    let items = []
    for (let i = 1; i <= pagesNumber; i++) {
        items.push(
            <Pagination.Item key={i} onClick={() => handleClick(i)} active={active === i}>
                {i}
            </Pagination.Item>
        )
    }
    return (
        <Pagination>
            {items}
        </Pagination>
    )
}
