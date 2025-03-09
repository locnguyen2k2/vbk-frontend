import { Image } from 'antd';

export const Picture = (props: any) => {
  return (
    <Image
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
      {...props}
    />
  );
};