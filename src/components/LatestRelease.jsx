import React, { Component } from "react";

import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";
import { Container, Row, Col, Dropdown, Card } from "react-bootstrap";

class LatestRelease extends Component {


state = {
    books: Fantasy,
    category: "Fantasy"
}



render() {
  
    return (
      <Container>
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Choose a Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => {this.setState({books: Fantasy,category: "Fantasy",})}}>Fantasy</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setState({books: History,category: "History",})}}>History</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setState({books: Horror,category: "Horror",})}}>Horror</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setState({books: Romance,category: "Romance",})}}>Romance</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setState({books: Scifi,category: "Scifi",})}}>Scifi</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br/>
        <h3>{this.state.category}</h3>
        <Row className="justify-content-center mt-3">
          {this.state.books.map((book) => {
            return (<Col key={book.asin}>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
          <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                  Price: ${book.price}
                  </Card.Text>
              </Card.Body>
              </Card>
              </Col>)     
    })}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
