/* jshint devel:true */

'use strict';

var padPatterns = {
  cols2rows2: {
    pattern: ['all', 'all', 'kick', 'snare'] },
  cols3rows2: {
    pattern: ['all', 'all', 'all', 'kick', 'hat', 'snare'] },
  cols4rows2: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'hat', 'snare', 'all'] },
  cols2rows3: {
    pattern: ['all', 'all', 'kick', 'snare', 'hat', 'all'] },
  cols2rows4: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all'] },
  cols3rows3: {
    pattern: ['all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all'] },
  cols3rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all'] },
  cols4rows3: {
    pattern: ['all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all', 'all', 'all'] },
  cols4rows4: {
    pattern: ['all', 'all', 'all', 'all', 'all', 'all', 'all', 'all', 'kick', 'snare', 'hat', 'all', 'all', 'all', 'all', 'all'] } };