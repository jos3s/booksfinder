import styled from 'styled-components';
import { layout, space, compose, border } from 'styled-system';

export const Img = styled.img`
  ${compose(layout, space, border)}
`;
