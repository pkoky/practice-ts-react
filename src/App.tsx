import React, {useState} from 'react';
import { ButtonText } from './components/ButtonText';
import { Disabled } from './components/Disabled';
import { FontSize } from './components/FontSize';
import { BorderRadius } from './components/BorderRadius';
import { Opacity } from './components/Opacity';
import { BackgroundColor } from './components/Background';
import { Color } from './components/Color';

type ButtonProps = {
  textValue: string;
  isDisabled: boolean;
  fontSize: number;
  borderRadius: number;
  opacity: number;
  // 型定義のときにanyはほぼ使用しません。なるべく特定の型を指定したほうがいいです！
  // anyを指定すればエラーは無くなり、あらゆる型の値を入力できるようになりますが、TSを使用する意味が薄れてしまいます！
  background: any;
  color: any;
}

const Button: React.VFC<ButtonProps> = ({textValue, isDisabled, fontSize, borderRadius, opacity, background, color}) =>  {
  const buttonStyle = {
    fontSize: fontSize + 'px',
    borderRadius: borderRadius + 'px',
    opacity: opacity,
    background: background,
    color: color,
  }
  return (
    <div>
        <input type="button" value={textValue} disabled={isDisabled} style={buttonStyle}/>
    </div>
  )
}





function App() {
  // useState()に初期値を渡すと、型引数を指定しなくても、TSは勝手にstateの型を推論してくれます。
  const [buttonText, setButtonText] = useState<any>();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(10);
  const [borderRadius, setBorderRadius] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const [background, setBackground] = useState<any>('white');
  const [color, setTextColor] = useState('black');

  return (
    <div className="App">
      <header className="App-header">
        <Button
          textValue={buttonText}
          isDisabled={isDisabled}
          fontSize={fontSize}
          borderRadius={borderRadius}
          opacity={opacity}
          background={background}
          color={color}
        />
        <Color color={color} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextColor(e.target.value)}/>
        <BackgroundColor background={background} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBackground(e.target.value)}/>
        <Opacity opacity={opacity} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setOpacity(Number(e.target.value))}/>
        <BorderRadius borderRadius={borderRadius} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setBorderRadius(Number(e.target.value))}/>
        <FontSize fontSize={fontSize} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFontSize(Number(e.target.value))}/>
        <Disabled onChange={() => setIsDisabled(!isDisabled)}/>
        <ButtonText textValue={buttonText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setButtonText(e.target.value)}/>
      </header>
    </div>
  )
}


export default App;
