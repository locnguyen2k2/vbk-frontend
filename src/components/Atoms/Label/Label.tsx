import BlurBackground from '../../Templates/BlurBackground';

export const Label = (props: any) => {
  return (
    <h1 {...props} className={`label ${props?.className || ''}`}>{props.content}
      {props.blur && <BlurBackground {...props} width={'100%'} height={'100%'} blur={2} />}
    </h1>
  );
};