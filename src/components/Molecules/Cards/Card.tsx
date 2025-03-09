import React from 'react';

export const ProductCard = (props: any) => {
  return (
    <div className={'prod-card'}>{props.item}</div>
  );
};