import P from 'prop-types';
import * as Styled from './styles';

import { Button } from '../Button';

export const Search = ({ onSubmit, inputValue, onChange }) => {
  return (
    <Styled.Form onSubmit={onSubmit} gridGap="small" flexDirection={['column', 'row']}>
      <Styled.Input
        type="text"
        name="query"
        placeholder="Search for books, authors..."
        value={inputValue}
        onChange={onChange}
        bg="cardBg"
        color="text"
        fontSize="small"
      />
      <Button variant="primary" type="submit" width={['100%', '350px']}>
        Search
      </Button>
    </Styled.Form>
  );
};

Search.propTypes = {
  onSubmit: P.func.isRequired,
  inputValue: P.string.isRequired,
  onChange: P.func.isRequired,
};
