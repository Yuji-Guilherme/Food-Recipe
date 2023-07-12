import styled from 'styled-components';

const SrcButton = styled.button`
  height: 26px;
  background-color: transparent;
  margin-top: 2px;
  font-size: 1.6rem;

  > svg {
    font-size: 1.8rem;
    color: var(--dark-blue-1);
  }
`;

const RmvButton = styled(SrcButton)`
  padding-right: 8px;
  border-right: solid 1px #beb3b38f;
  margin: 2px 8px 0 6px;

  > svg {
    color: var(--input-placeholder);
  }
`;

export { SrcButton, RmvButton };
