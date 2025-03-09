import { InputNumber } from 'antd';

export const InputNumeric = (props: any) => {
  const { thousandSeparator = ',', decimalSeparator = '.' } = props;
  return (
    <InputNumber
      {...props}
      style={{ width: '100%' }}
      formatter={value => {
        const [integer, decimal] = `${value}`.split('.');
        const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        return decimal && decimalSeparator ? `${formattedInteger}${decimalSeparator}${decimal}` : formattedInteger;
      }}
      parser={value => `${value}`.replace(new RegExp(`\\${thousandSeparator}`, 'g'), '').replace(decimalSeparator, '.')}
    />
  );
};