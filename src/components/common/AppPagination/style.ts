import styled from 'styled-components';
import { Pagination } from 'antd';

const StyledPagination = styled(Pagination)`
  &.ant-pagination {
    .ant-pagination-item {
      transition: all var(--trTime);
      min-width: var(--space3x);
      height: var(--space3x);
      line-height: calc(var(--space3x) - 2px);
      border-radius: 2px;
      a {
        color: var(--primaryBlue);
        font-size: 14px;
        line-height: 22px;
        font-family: var(--notoSans);
        vertical-align: middle;
      }
      &:not(.ant-pagination-item-active) {
        &:hover {
          background: var(--primaryActiveGreen);
          a {
            color: var(--primaryWhite);
          }
        }
      }
      &-active {
        background: var(--primaryGreen);
        border-color: var(--primaryGreen);
        a {
          color: var(--primaryWhite);
        }
        &:hover {
          border-color: var(--primaryGreen);
          a {
            color: var(--primaryWhite);
          }
        }
      }
    }
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      min-width: var(--space3x);
      height: var(--space3x);
      line-height: var(--space3x);
      color: var(--primaryBlue);
      .ant-pagination-item-link {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        .ant-pagination-item-link {
          background: transparent;
        }
      }
    }
    .ant-pagination-jump-prev {
      &:hover {
        .ant-pagination-item-ellipsis {
          opacity: 1;
        }
        .ant-pagination-item-link-icon {
          opacity: 0;
        }
      }
    }
    .ant-pagination-jump-next {
      &:hover {
        .ant-pagination-item-ellipsis {
          opacity: 1;
        }
        .ant-pagination-item-link-icon {
          opacity: 0;
        }
      }
    }
  }
`;

export default StyledPagination;
