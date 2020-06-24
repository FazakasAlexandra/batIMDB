import styled, { keyframes } from 'styled-components';
import {flash} from 'react-animations';

const Bounce = styled.div`animation: 1.2s ${keyframes `${flash}` } infinite`;

export default Bounce;