import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchFilter = ({ handleSearch, handleChange, categoryList }) => {
  return (
    <Row className='mt-5 mb-5 search-filter'>
      <Col sm={8} className='ps-0'>
        <h3>Search for recipes</h3>
        <p> Got a dish in mind? see if we have it by typing the name below! </p>
        <input onChange={handleSearch} type="text" placeholder="Search" aria-label="Search" />
      </Col>
      <Col sm={4}>
        <p>Filter by category</p>
        <select onChange={handleChange}>
          <option defaultValue>All</option>
          {categoryList.map((strCategory, i) => {
            return <option key={i} value={strCategory} name={strCategory}>{strCategory}</option>
          })}
        </select>
      </Col>
    </Row>
  )
}

export default SearchFilter
