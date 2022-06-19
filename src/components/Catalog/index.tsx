import React, { Component } from 'react';
import { ICatalogState } from './interface';
import { IProduct } from '../Card/interface';
import { Card } from '../Card';
import {
    Box,
            Container,
        } from '@chakra-ui/react';
import Masonry from 'react-masonry-css';

class Catalog extends Component<{}, ICatalogState> {
    static api_url: string = 'https://fakestoreapi.com/products/';
    state:ICatalogState = {
        products: [],
    }

    getProducts = async () => {
        try {
            const response = await fetch(Catalog.api_url);

            if (!response.ok) {
                const message = `An error has occured: ${response.status} - ${response.statusText}`;
                throw new Error(message);
            }
        
            const productGrid = await response.json() as IProduct[] ;
            this.setState({ products : productGrid })

        } catch (err: any) {
            console.log(`error: ${err}`);
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    breakpointColumnsObj = {
        default: 4,
        1100: 2,
        700: 2,
        500: 1
      };

    render() {
        return (

                <Container
                    as={'main'}
                    display={'f'}
                    mx={'auto'}
                    maxW="100%"
                    px={'20px'}

                    >     
                    <Masonry
                        breakpointCols={this.breakpointColumnsObj}
                        className="catalog-grid"
                        columnClassName="catalog-grid-column"
                    >
                        {
                            this.state.products.map(({ id, title, price, description, category, image, rating }: IProduct) => {
                                return (
                                    <Box key={id} m={['20px', '10px']}>
                                        <Card id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
                                    </Box>
                                )
                            })
                        }
                    </Masonry>
                </Container>
        )
    }
}

export { Catalog }