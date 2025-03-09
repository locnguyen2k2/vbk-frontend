import { Label } from '../../Atoms/Label/Label';
import React from 'react';

export default function HorizCarousel(props: any) {
  return (
    <>
      <Label className={'rad-t-primary'} content={props.title} blur={'true'} />
    </>
  );
}
