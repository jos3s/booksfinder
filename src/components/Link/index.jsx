import P from 'prop-types';
import * as Styled from './styles';

export const Link = ({ link = '#', newTab = true, children }) => {
  return (
    <Styled.Link href={link} target={newTab ? '_blank' : '_self'}>
      {children}
    </Styled.Link>
  );
};

Link.propTypes = {
  link: P.string,
  newTab: P.bool,
  children: P.any,
};
