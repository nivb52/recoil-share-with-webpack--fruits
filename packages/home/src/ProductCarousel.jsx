import React from 'react';
import { Carousel } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { useRecoilState } from 'recoil';

import fruit from './fruit';
import ProductCard from './ProductCard';
import { selectedItems } from './atoms';

export default () => {
  const carousel = React.useRef(null);
  const [selected, selectedSet] = useRecoilState(selectedItems);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '50px calc(100% - 100px) 50px',
      }}
    >
      <CaretLeftFilled
        onClick={() => carousel.current.prev()}
        fill="black"
        style={{
          fontSize: 50,
          marginTop: 120,
        }}
      />
      <Carousel slidesToShow={4} ref={carousel}>
        {fruit.map((product) => (
          <div key={product.name}>
            <ProductCard
              {...product}
              selected={selected.includes(product.name)}
              onClick={() => {
                if (selected.includes(product.name)) {
                  selectedSet(selected.filter((name) => name !== product.name));
                } else selectedSet([...selected, product.name]);
              }}
            />
          </div>
        ))}
      </Carousel>
      <CaretRightFilled
        onClick={() => carousel.current.next()}
        fill="black"
        style={{
          fontSize: 50,
          marginTop: 120,
        }}
      />
    </div>
  );
};