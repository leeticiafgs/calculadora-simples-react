import Input from './components/Input'
import Button from './components/Button'

import {Container, Content, Row} from './style'
import { useState } from 'react'

const App = () => {

  const [currentNumber, setCurrentNumber] =  useState('0')// estado que armazena o numero atual, inicialmente definido como 0
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation]=useState('');


  // funcao que adiciona o numero na tela
  const handleAddNumber = (num)=>{
    setCurrentNumber(prev => `${prev=== '0' ? '' : prev}${num}`) /* A segunda parte faz validação no prev, para exibir em branco ao limpar */

  }

  // funcao para limpar a tela

  const handleOnClear = () => {
    setFirstNumber('0');
    setCurrentNumber('0');
    setOperation('');

  };

  // funcao que faz a soma

  const handleSumNumbers = () => {
    if (firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }
    else{
      const sum = Number(firstNumber)+ Number(currentNumber)
      setCurrentNumber (String(sum))
      setOperation('');
    }
  }

// funcao que faz a subtração

const handleMinusNumbers = () => {
  if (firstNumber==='0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('-')
  }
  else{
    const sum = Number(firstNumber) - Number(currentNumber)
    setCurrentNumber (String(sum))
    setOperation('');
  }
}

// funcao que faz a multiplicação

const handleMultiplicationNumbers = () => {
  if (firstNumber==='0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('*')
  }
  else{
    const sum = Number(firstNumber) * Number(currentNumber)
    setCurrentNumber (String(sum))
    setOperation('');
  }
}

// funcao que faz a divisão

const handleDivideNumbers = () => {
  if (firstNumber==='0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('/')
  }
  else{
    const sum = Number(firstNumber) / Number(currentNumber)
    setCurrentNumber (String(sum))
    setOperation('');
  }
}



// funcao para usar o igual

const handleEquals = () => {
  if (firstNumber !=='0' && operation !== '' && currentNumber!== '0'){
    switch (operation) {
      case '+':
        handleSumNumbers();
        break;
      case '-':
        handleMinusNumbers();
        break;
      case '*':
        handleMultiplicationNumbers();
        break;
      case '/':
        handleDivideNumbers();
        break;
      default:
        break;
    }
  }
}


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/> 
        <Row>
          <Button label="x" onClick={handleMultiplicationNumbers}/>{ /* Chama a função de multiplicacao */ }
          <Button label="/" onClick={handleDivideNumbers}/>
          <Button label="C" onClick={handleOnClear}/> { /* Chama a função que limpa a tela */ }
          <Button disabled label="."/> 

        </Row> 
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>{ /* Chama a função de subtracao */ }
        </Row>  
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/> { /* Chama a função de soma */ }
        </Row>      
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/> { /* faz o calculo ao clicar no = */ }
        </Row>    
      </Content>
    </Container>
  );
}

export default App;
