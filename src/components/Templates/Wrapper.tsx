import styled from 'styled-components';

interface Props {
  blur?: number;
}

export const Wrapper = styled.div<Props>`
    margin: 0 auto;
    position: relative;
    border-radius: 7px;
    max-width: ${props => props?.style?.maxWidth || '500px'};
    backdrop-filter: blur(${props => props?.blur ? props.blur : 0}px);
`;