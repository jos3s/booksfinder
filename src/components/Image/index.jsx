import P from 'prop-types';
import * as Styled from './styles';

export const Image = ({ src, alt, ...props }) => {
  return <Styled.Img src={src} alt={alt} {...props}></Styled.Img>;
};

Image.propTypes = {
  src: P.string.isRequired,
  alt: P.string.isRequired,
};
