import P from 'prop-types';
import * as Styled from './styles';

import { Button } from '../Button';

export const Search = ({ onSubmit, inputValue, onChange }) => {
  return (
    <Styled.Form onSubmit={onSubmit}>
      <Styled.Input
        type="text"
        name="query"
        placeholder="Search for books, authors..."
        value={inputValue}
        onChange={onChange}
      />
      <Button variant="primary" type="submit">
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
