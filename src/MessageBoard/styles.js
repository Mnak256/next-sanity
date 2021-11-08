import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? 'transparent'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0'};
`
export const Board = styled(Div)`
  margin: auto;
  max-width: 800px;
  min-height: 100px;
  margin: 16px;
  padding: 16px;
  background-color: #bfb6ea;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const Message = styled(Div)`
  margin: 16px;
  padding: 32px;
  border-radius: 8px;
  background-color: #3fb6ea;
`
