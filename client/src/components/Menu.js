import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Header, 
  Dimmer, 
  Loader,
  List,
  Segment
} from 'semantic-ui-react';
import ProductForm from './ProductForm';
import axios from 'axios';

class Menu extends Component {
  state = { products: [] };

  componentDidMount() {
    axios.get('/api/products')
      .then( res => {
        this.setState({ products: res.data })
      })
      .catch( err => {
        console.log(err);
    });
  }

  displayProducts = () => {

    return this.state.products.map( product => {
      return(
        <List.Item>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </List.Item>
      )
    });
  }

  productsLoader() {
    return(
      <Dimmer active style={styles.dimmer}>
        <Loader>Loading Menu...</Loader>
      </Dimmer>
    )
  }

  addProduct = (product) => {
    this.setState({ products: [product, ...this.state.products] });
  }

  render() {
    return(
    <div>  
      <Header as='h1'>The Menu</Header>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            { this.state.products.length > 0 ?
              <List>
                {this.displayProducts()}
              </List> :
              this.productsLoader() 
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>    
            <Segment>
              <ProductForm addProduct={this.addProduct} />
            </Segment>
            </Grid.Column>
        </Grid.Row>
      </Grid>  
    </div>  
    )
  }
}

const styles = {
  dimmer: {
    height: '100vh',
  },
}

export default Menu;