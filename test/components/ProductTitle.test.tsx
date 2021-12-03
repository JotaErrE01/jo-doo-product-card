import React from 'react';
import render from 'react-test-renderer';
import { ProductTitle, ProductCardObj as ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('Product Title', () => {
    
    test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = render.create(<ProductTitle title="Titulo personalizado" />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = render.create(
            <ProductCard
                product={ product1 }
            >
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper).toMatchSnapshot();
    })  
    
})


