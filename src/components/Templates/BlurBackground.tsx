import styled from 'styled-components';

interface Props {
  blur: number;
  width?: string;
  height?: string;
  zIndex?: number;
  opacity?: string;
}

const BlurBackground = styled.div<Partial<Props>>`
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    transition: ease-in-out 0.3s all;
    opacity: ${props => props?.opacity ? parseInt(props.opacity) : 1};
    z-index: ${props => props?.zIndex ? props.zIndex : 0};
    width: ${props => props?.width ? props.width : '100vw'};
    height: ${props => props?.height ? props.height : '100vh'};
    backdrop-filter: blur(${props => props.blur}px);
`;

export default BlurBackground;