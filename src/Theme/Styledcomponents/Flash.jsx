/* import React, { Component } from 'react'; */
import styled, { keyframes } from 'styled-components';
import {flash} from 'react-animations';

const Bounce = styled.div`animation: 0.3s ${keyframes `${flash}` } infinite`;

export default Bounce;