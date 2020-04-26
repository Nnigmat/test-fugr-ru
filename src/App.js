import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'

import { linkBig, linkSmall } from './constants'
import Loader from './Loader'
import SearchForm from './SearchForm'
import Table from './Table'
import AccountInfo from './AccountInfo'
import Pagination from './Pagination'

const App = () => {
  const [data, setData] = useState(null)
  const [accountId, setAccountId] = useState(null)
  const [filteredData, setFilteredData] = useState([])
  const [activePage, setActivePage] = useState(1)

  const rowsPerPage = 50

  useEffect(() => {
    fetch(linkBig)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setFilteredData(data)
      })
  }, [])

  const handleSearchSubmit = (filter) => {
    const lowFilter = filter.toLowerCase()

    setFilteredData(data.filter((el) => {
      for (const property in el) {
        if (String(el[property]).toLowerCase().includes(lowFilter)) {
          return true
        }
      }
      return false
    }))
  }

  if (!data) {
    return <Loader />
  }

  const begin = (activePage - 1) * rowsPerPage
  const paginatedData = filteredData.slice(begin, begin + rowsPerPage)

  return (
    <Container>
      <SearchForm handleSubmit={handleSearchSubmit} />
      <Table data={paginatedData} onRowClick={(id) => setAccountId(id)} />
      <Pagination
        handleClick={(number) => setActivePage(number)}
        numberEntities={filteredData.length}
        active={activePage}
        rowsPerPage={rowsPerPage}
      />
      {accountId && <AccountInfo data={paginatedData.find(el => el.id === accountId)} />}
    </Container>
  );
}

export default App;
