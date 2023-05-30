import styled from 'styled-components';

const SrcButton = styled.button`
  background-color: transparent;
  height: 26px;
  margin-top: 2px;

  > svg {
    font-size: 1.8rem;
    color: #b7aaaa;
  }
`;

const RmvButton = styled(SrcButton)`
  border-right: solid 1px #d8d8d8;
  padding-right: 8px;
  margin: 2px 6px 0 6px;
`;

export { SrcButton, RmvButton };
