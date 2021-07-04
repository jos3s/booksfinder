import P from 'prop-types';
import { Container } from '../Container';
import * as Styled from './styles';

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
      <Styled.Button type="submit">Search</Styled.Button>
    </Styled.Form>
  );
};

Search.propTypes = {
  onSubmit: P.func.isRequired,
  inputValue: P.string.isRequired,
  onChange: P.func.isRequired,
};
