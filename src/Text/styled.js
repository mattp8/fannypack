import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { palette, theme } from 'styled-tools';
import { lighten } from 'polished';

export default styled(Box)`
  abbr& {
    border-bottom: 1px dotted;
    cursor: help;
    text-decoration: none;
  }

  code& {
    background: ${props => lighten(0.5, palette('primary')(props))};
    border-radius: 0.1rem;
    color: ${palette('primary')};
    padding: 0.1rem 0.2rem;
  }

  i& {
    font-style: italic;
  }

  kbd& {
    background: #454d5d;
    border-radius: 0.1rem;
    color: #fff;
    padding: 0.1rem 0.2rem;
  }

  mark& {
    background: #ffe9b3;
    border-radius: 0.1rem;
    padding: 0.1rem 0.2rem;
  }

  strong& {
    font-weight: bold;
  }

  sub&,
  sup& {
    font-size: 0.8em;
    vertical-align: baseline;
  }

  a&,
  ins&,
  u& {
    text-decoration-skip: ink edges;
  }

  i&,
  cite&,
  var&,
  em& {
    font-style: italic;
  }

  code&,
  kbd&,
  pre&,
  samp& {
    font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;
  }

  ${theme('text.base')};
`;
