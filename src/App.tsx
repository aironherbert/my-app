import styled from '@emotion/styled'
import './App.css'
import Block from './components/block';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default function App() {
  return (
    <div className="App">
      <Container>
        <Block />
      </Container>
    </div>
  );
}