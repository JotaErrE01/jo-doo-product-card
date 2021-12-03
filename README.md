# jo-doo-product-card

Este es un paquete de pruebas de despliegue en npm

### Jonathan Ruiz R.

## Ejemplo
```
import { ProductCardObj as ProductCard, ProductButtons, ProductImage, ProductTitle } from 'jo-doo-product-card';
```
```
<ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10
    }}
>   
    {
        ({ reset, isMaxCountReached, count, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
    }
</ProductCard>
```