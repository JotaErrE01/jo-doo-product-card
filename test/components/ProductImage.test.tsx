import React from 'react';
import render from 'react-test-renderer';
import { ProductCardObj as ProductCard, ProductImage } from '../../src/components';
import { product2, product1 } from '../data/products';


describe('Product Title', () => {
    
    test('Debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = render.create(
            <ProductCard
                product={ product2 }
            >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con la imagen personalizada', () => {
        Object.assign(product1, { img: 'customimg.jpg' });
        const wrapper = render.create(
            <ProductCard
                product={ product1 }
            >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toTree()).toMatchSnapshot();
    })  
    
})