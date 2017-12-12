import React, { Component } from 'react';
import { 
  Segment,
  Dimmer, 
  Loader, 
  List, 
  Header, 
  Button 
} from 'semantic-ui-react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Product extends Component {
  state = { product: {}, loaded: false };

  componentDidMount() {
    const productId = this.props.match.params.id;

    axios.get(`/api/products/${productId}`)
      .then( res => {
        this.setState({ product: res.data, loaded: true });
      })
      .catch( err => {
        console.log(err);
    });
  }

  deleteProduct = () => {
    axios.delete(`/api/products/${this.state.product.id}`)
      .then( res => {
        this.props.history.push('/menu')
      })
      .catch( err => {
        console.log(err)
      })
  }

  displayProduct = () => {
    const { id, name, price, description } = this.state.product;

    return(
      <Segment basic>
        <Header as='h1'>{name}</Header>
        <List>
          <List.Item>Description: {description}</List.Item>
          <List.Item>Price: {price}</List.Item>
        </List>
        <Button as={Link} to={`/products/${id}/edit`} color='orange'>Edit</Button>
        <Button color='red' onClick={this.deleteProduct}>Delete</Button>
        <Button as={Link} to='/menu'>All Items</Button>
      </Segment>
    );
  }

  render() {
    if(this.state.loaded)
      return(
        <Segment>
          { this.displayProduct() }
        </Segment>
      )
    else
      return(
        <Dimmer active>
          <Loader>Loading Menu...</Loader>
        </Dimmer>
      )
  }
}

export default Product;