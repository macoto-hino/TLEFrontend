import { MouseEventHandler, useContext } from 'react';
import styled from 'styled-components';

import { LocaleContext } from '@/context';
import { getString } from '@/localisations';

const ButtonComponent = styled.div`
  padding: 3rem;
  border-radius: 3rem;
  color: var(--accentColorLighter);
  background-color: var(--toolbarFieldColor);
  flex: 1;
  text-align: center;
`;

export default function Button(props: {label: string, onClick?: MouseEventHandler<HTMLDivElement>}) {
  const locale = useContext(LocaleContext);
  return (
    <ButtonComponent onClick={props.onClick}>{getString(locale, props.label)}</ButtonComponent>
  );
}