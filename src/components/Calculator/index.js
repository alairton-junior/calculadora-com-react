import { Container, Content, Row} from "./styles"
import Input from "../Input"
import Button from '../Button'
import History from '../History'
import { useState } from 'react'

export default function Calculator() {

    

    const [currentNumber, setCurrentNumber] = useState('0')
    const [firstNumber, setFirstNumber] = useState('0')
    const [historyValue, setHistoryValue] = useState('')
    const [operation, setOperation] = useState('')

    // Função de adicionar número no value do input
    const addCurrentNumber = (number) => {
        setCurrentNumber(prev => {
            console.log(prev)
            // Ficou devendo a estilização dos botões
            //  Validação do 0.5 5.2
            // O cálculo ser contínuo

            if(number === '.' && prev === 0) {
                prev = '0'
            }

            if(number === '.' && currentNumber.includes('.')) {
                prev = ''
                setCurrentNumber('0')
            }
            
            if(historyValue.includes('=')) {
                setHistoryValue('')
            }
            // Validação .
            // if(firstNumber === '0' && prev !== '') {
            //     prev = '0'
            // }
            
            // Validação 0 
            if(prev === '0' && number !== '.') {
                prev = '' 
            }
            return `${prev}${number}`
        })
    }

    // Função de limpar tela da calculadora
    const clear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
        setHistoryValue('')
    }

    // Função da operação Somar
    const sumNumbers = () => {
        if(firstNumber === '') {
            setCurrentNumber('0')
        } else if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setHistoryValue(String(currentNumber)+'+')
            setCurrentNumber('0')
            setOperation('+')
        } else {
            const sum = Number(firstNumber) + Number(currentNumber)
            setHistoryValue(String(firstNumber)+'+'+(currentNumber)+'=')
            setCurrentNumber(String(sum))
            setOperation('')
            setFirstNumber('0')
        }
    }

    const remNumbers = () => {
        if(firstNumber === '') {
            setCurrentNumber('0')
        } else if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setHistoryValue(String(currentNumber)+'-')
            setCurrentNumber('0')
            setOperation('-')
        } else {
            const sum = Number(firstNumber) - Number(currentNumber)
            setHistoryValue(String(firstNumber)+'-'+(currentNumber)+'=')
            setCurrentNumber(String(sum))
            setOperation('')
            setFirstNumber('0')
        }
    }

    const multiNumbers = () => {
        if(firstNumber === '') {
            setCurrentNumber('0')
        } else if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setHistoryValue(String(currentNumber)+'x')
            setCurrentNumber('0')
            setOperation('*')
        } else {
            const sum = Number(firstNumber) * Number(currentNumber)
            setHistoryValue(String(firstNumber)+'x'+(currentNumber)+'=')
            setCurrentNumber(String(sum))
            setOperation('')
            setFirstNumber('0')
        }
    }

    const dividiNumbers = () => {
        if(firstNumber === '') {
            setCurrentNumber('0')
        } else if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setHistoryValue(String(currentNumber)+'/')
            setCurrentNumber('0')
            setOperation('/')
        } else {
            const sum = Number(firstNumber) / Number(currentNumber)
            setHistoryValue(String(firstNumber)+'/'+(currentNumber)+'=')
            setCurrentNumber(String(sum))
            setOperation('')
            setFirstNumber('0')
        }
    }

    const equanls = () => {

        if(firstNumber === '0') {
            setCurrentNumber('0')
            setHistoryValue('')
        }

        if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation) {
            case '+':
            sumNumbers()
            break;
            case '-':
            remNumbers()
            break;
            case '*':
            multiNumbers()
            break;
            case '/':
            dividiNumbers()
            break;
            default:
                break;
        }
     } 
  }

  return (
    <Container>
      <Content>
        
      <History value={historyValue}/>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" styleOp="op" onClick={clear}/>
          <Button className="op" styleOp="op" label="/"  onClick={dividiNumbers}/>
        </Row>
        <Row>
          <Button label="7"  onClick={() => addCurrentNumber('7')}/>
          <Button label="8"  onClick={() => addCurrentNumber('8')}/>
          <Button label="9"  onClick={() => addCurrentNumber('9')}/>
          <Button styleOp="op" className="op" label="x" onClick={multiNumbers} />
        </Row>
        <Row>
          <Button label="4"  onClick={() => addCurrentNumber('4')}/>
          <Button label="5"  onClick={() => addCurrentNumber('5')}/>
          <Button label="6"  onClick={() => addCurrentNumber('6')}/>
          <Button styleOp="op" className="op" label="-"  onClick={remNumbers}/>
        </Row>
        <Row>
          <Button label="1"  onClick={() => addCurrentNumber('1')}/>
          <Button label="2"  onClick={() => addCurrentNumber('2')}/>
          <Button label="3" onClick={() => addCurrentNumber('3')}/>
            <Button styleOp="op" label="+" onClick={sumNumbers}/>
          
        </Row>
        <Row>
          <Button label="0"  onClick={() => addCurrentNumber('0')}/>
          <Button label="."  onClick={() => addCurrentNumber('.')}/>
          <Button styleOp="equanls" label="="  onClick={equanls}/>
        </Row>
        
      </Content>
    </Container>
  );
}