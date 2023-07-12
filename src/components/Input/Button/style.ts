import styled from 'styled-components';

const SrcButton = styled.button`
  height: 26px;
  font-size: 1.6rem;
  background-color: transparent;
  margin-top: 2px;

  > svg {
    font-size: 1.8rem;
    color: var(--dark-blue-1);
  }
`;

const RmvButton = styled(SrcButton)`
  border-right: solid 1px #beb3b38f;
  padding-right: 8px;
  margin: 2px 8px 0 6px;

  > svg {
    color: var(--input-placeholder);
  }
`;

export { SrcButton, RmvButton };
