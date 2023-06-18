import styled from 'styled-components';

const SrcButton = styled.button`
  height: 26px;
  background-color: transparent;
  margin-top: 2px;

  > svg {
    font-size: 1.8rem;
    color: var(--light-grey);
  }
`;

const RmvButton = styled(SrcButton)`
  padding-right: 8px;
  border-right: solid 1px #d8d8d8;
  margin: 2px 6px 0 6px;
`;

export { SrcButton, RmvButton };
