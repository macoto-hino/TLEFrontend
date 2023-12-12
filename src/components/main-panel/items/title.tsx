import { useContext } from 'react';
import styled from 'styled-components';

import { LocaleContext } from '@/context';
import { getString } from '@/localisations';

const Container = styled.div``;

export default function Title(props: MainPanelItemTitle) {
  const locale = useContext(LocaleContext);
  return (
    <Container>
      {getString(locale, props.title)}
    </Container>
  );
}