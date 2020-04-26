import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

import { SortByEnum } from '../constants'

export default ({ data, onRowClick }) => {
    const [sortBy, setSortBy] = useState(SortByEnum.none)
    const [isAsc, setIsAsc] = useState(true)

    const handleSortClick = (columnName) => {
        if (columnName === sortBy) {
            setIsAsc(prev => !prev)
            return
        }

        setSortBy(columnName)
        setIsAsc(true)
    }

    const showIcon = (columnName) => {
        if (columnName === sortBy) {
            return isAsc ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />
        }
    }

    data.sort((a, b) => {
        if (sortBy === SortByEnum.id) {
            return isAsc ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
        }

        if (isAsc) {
            return a[sortBy] > b[sortBy] ? 1 : -1
        }

        return b[sortBy] > a[sortBy] ? 1 : -1
    })

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th
                        onClick={() => handleSortClick(SortByEnum.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        # {showIcon(SortByEnum.id)}
                    </th>
                    <th
                        onClick={() => handleSortClick(SortByEnum.firstName)}
                        style={{ cursor: 'pointer' }}
                    >
                        First name {showIcon(SortByEnum.firstName)}
                    </th>
                    <th
                        onClick={() => handleSortClick(SortByEnum.lastName)}
                        style={{ cursor: 'pointer' }}
                    >
                        Last name {showIcon(SortByEnum.lastName)}
                    </th>
                    <th
                        onClick={() => handleSortClick(SortByEnum.email)}
                        style={{ cursor: 'pointer' }}
                    >
                        Email {showIcon(SortByEnum.email)}
                    </th>
                    <th
                        onClick={() => handleSortClick(SortByEnum.phone)}
                        style={{ cursor: 'pointer' }}
                    >
                        Phone {showIcon(SortByEnum.phone)}
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(el => (
                    <tr
                        key={el.id + el.phone}
                        onClick={() => onRowClick(el.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <td>{el.id}</td>
                        <td>{el.firstName}</td>
                        <td>{el.lastName}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
