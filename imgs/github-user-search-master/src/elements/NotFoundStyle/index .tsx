import styled from 'styled-components';
import { Colors } from '../../utils/layout';

export const NotFoundStyle = styled('h1')`
  color: ${Colors.notfoundgrey};
  font-size: 13rem;
  margin-bottom: 0;
  font-family: 'Kodchasan', sans-serif;
  font-weight: 200;
`;

export const NotFoundText = styled('h2')`
  color: ${Colors.notfoundgrey};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0;
`;
export const NotFoundOne = styled('h1')`
  color: ${Colors.notfoundgrey};
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const NotFoundBtn = styled('h4')`
  color: ${Colors.textPrimary};
`;
export const NotFoundContainer = styled('main')`
  margin-top: 5rem;
`;
