import styled from 'styled-components';

const StyledAIContentWrapper = styled.div`
  && {
    ol,
    ul {
      list-style: square;
      color: var(--primaryGreen);
      padding-left: 16px;
      margin-left: 24px;
      margin-bottom: 24px;
    }

    ol li::marker,
    ul li::marker {
      color: var(--primaryGreen);
      float: left;
    }

    ol li,
    ul li {
      color: var(--primaryBlue);
      font-size: 14px;
    }

    ol li p,
    ul li p {
      display: inline;
      font-size: 16px;
    }

    h3 {
      font-size: 18px;
      margin: 16px 0;
    }

    h2 {
      font-size: 20px;
      margin: 16px 0;
    }

    h1 {
      font-size: 22px;
      margin: 24px 0;
    }

    p {
      font-size: 16px;
      margin-bottom: 8px;
    }

    p:last-child {
      margin-bottom: 0;
    }

    table {
      width: 100%;
    }

    td,
    th {
      border: 1px solid #ddd;
      padding: 4px;
      font-size: 13px;
    }

    td em {
      color: #d1441a !important;
    }

    td strong {
      color: #d1441a !important;
    }

    td strong em,
    td em strong {
      color: darkred !important;
      font-size: 13px;
      font-style: normal;
    }

    td:nth-child(5n) em {
      font-style: normal !important;
    }

    td:nth-child(5n) {
      color: green;
    }

    tr:nth-child(even) {
      background-color: #eee;
    }

    tr:hover {
      background-color: #ddd;
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: var(--primaryGreen);
      color: white;
    }
  }
`;

export default StyledAIContentWrapper;
