import P from 'prop-types';
import * as Styled from './styles';

export const Link = ({ link = '#', newTab = true, children, ...props }) => {
  return (
    <Styled.Link
      href={link}
      target={newTab ? '_blank' : '_self'}
      color="blueGray"
      {...props}
    >
      {children}
    </Styled.Link>
  );
};

Link.propTypes = {
  link: P.string.isRequired,
  newTab: P.bool,
  children: P.any,
};
