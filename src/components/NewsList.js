import { Component } from "react";
import { Card, CardTitle, CardText, CardImg, CardSubtitle } from "reactstrap";

class NewsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const news = this.props.news;
    console.log(news);
    return (
      <div>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
          color="success"
          outline
        >
          <CardImg src={news.image} width="100%" />
          <CardTitle tag="h5">{news.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {news.subtitle}
          </CardSubtitle>
          <CardText>{news.content}</CardText>
        </Card>
      </div>
    );
  }
}

export default NewsList;
