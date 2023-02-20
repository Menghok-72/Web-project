// import React, { Component } from 'react'

// export default class Article extends Component {
//   render() {
//     return (
//       <div>Article</div>
//     )
//   }
// }
import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ArticleCard() {
  return (
    <Card  style={{ width: '18rem', margin:'10px' }}>
      <Card.Img variant="top" src="https://api.lorem.space/image?w=640&h=480&r=7709" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


 export function ArticleContainer(){
    return(
        <Container fluid>
            <Row ClassName='g-1 mt-3'>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <ArticleCard/>
                </Col>
            </Row>
        </Container>
    )
}
