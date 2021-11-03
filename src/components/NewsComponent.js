import axios from "axios";
import { Component } from "react";
import {
  Container,
  Row,
  Col,
  CardGroup,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import NewsList from "./NewsList";
import "../css/newsComponent.css";

class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      menuItems: [
        {
          sport: "Sport",
        },
        {
          auto: "Auto",
        },
        {
          cooking: "Cooking",
        },
      ],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/serviceManagement/v1`).then((res) => {
      const data = res.data;
      console.log(data);
      this.setState({ data: data });
    });
  }
  render() {
    let newsCards = this.state.data.map((item) => {
      return (
        <Col sm={6}>
          <NewsList news={item} />
        </Col>
      );
    });

    return (
      <Container className="bg-light border" fluid="sm">
        <Row>
          <Col sm={12} style={{ padding: "0px" }}>
            <h1>Hello!</h1>
            <h5>Here you can find beautiful news.</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <CardGroup>{newsCards}</CardGroup>
          </Col>
          <Col sm={2}>
            <Row sm={12}>
              <h5>Control</h5>
              <Button>Add news</Button>
            </Row>
            <Row sm={12}>
              <h5>Category</h5>
              <Nav vertical justified pills>
                {this.state.menuItems.map((tab, index) => {
                  return (
                    <NavItem key={index} onClick={() => {}}>
                      <NavLink href="#">{Object.keys(tab)}</NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsComponent;
