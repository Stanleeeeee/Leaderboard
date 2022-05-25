/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

import './style.css';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');
const player = document.getElementById('name');
const score = document.getElementById('score');
const errorMessage = document.getElementById('error');
const regex1 = /^\s+$/;
const regex2 = /^[0-9]+$/;

