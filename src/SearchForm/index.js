import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ({ handleSubmit }) => {
    const [filter, setFilter] = useState('')

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(filter)
            }}
        >
            <Form.Label>Filter</Form.Label>
            <Form.Control
                type="filter"
                placeholder="Enter filter"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
            />

            <Button
                variant="primary"
                type="submit"
            >
                Search
            </Button>
        </Form >
    )
}
