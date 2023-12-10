import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.div`
  padding: 3rem;
  border-radius: 3rem;
  color: white;
  background-color: rgba(6, 10, 16, 0.7);
  flex: 1;
  text-align: center;
`;

export default function Button(props: {label: string, onClick?: MouseEventHandler<HTMLDivElement>}) {
  return (
    <ButtonComponent onClick={props.onClick}>{props.label}</ButtonComponent>
  );
}