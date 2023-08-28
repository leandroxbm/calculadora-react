import {Container, Content, Row} from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev }${num}`);  
  }

  const handleSumNumber = () => { 
    setFirstNumber(currentNumber);
    setOperation('+');
    setCurrentNumber('0');
  }

  const handleSubtractNumber = () => { 
    setFirstNumber(currentNumber);
    setOperation('-');
    setCurrentNumber('0');
  }

  const handleMultiplyNumber = () => { 
    setFirstNumber(currentNumber);
    setOperation('*');
    setCurrentNumber('0');
  }

  const handleDivideNumber = () => { 
    setFirstNumber(currentNumber);
    setOperation('/');
    setCurrentNumber('0');
  }

  const handleResult = () => {
    if(operation === '+'){
      setCurrentNumber(String(Number(firstNumber) + Number(currentNumber)));
    }else if(operation === '-'){
      setCurrentNumber(String(Number(firstNumber) - Number(currentNumber)));
    }else if(operation === '*'){
      setCurrentNumber(String(Number(firstNumber) * Number(currentNumber)));
    }else if(operation === '/'){
      setCurrentNumber(String(Number(firstNumber) / Number(currentNumber)));
    }
    setOperation('');
  }

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber}/>

        <Row>
          <Button label="C" onClick={() => handleOnClear()}/>
          <Button label="*" onClick={handleMultiplyNumber}/>
          <Button label="/" onClick={handleDivideNumber}/>
          <Button label="-" onClick={handleSubtractNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="=" onClick={handleResult}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
