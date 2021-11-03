import { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";

class NewsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const news = this.props.news;
    return (
      <div>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
          color="success"
          outline
        >
          <CardTitle tag="h5">{news.title}</CardTitle>
          <CardText>{news.content}</CardText>
        </Card>
      </div>
    );
  }
}

export default NewsList;
