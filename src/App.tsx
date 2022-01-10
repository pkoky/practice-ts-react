import {useState} from 'react';

type Props = {
  text: string
}

const Button: React.VFC<Props> = (props) =>  {
  return (
    <div>
        <input type="button"/>
    </div>
  )
}

const Color: React.VFC = () => {
  const [textColor, setTextColor] = useState('black')
  return (
    <div>
      <label>color</label>
      <input 
        type="color" 
        onChange={(e) => setTextColor(e.target.value)}
      />
      <h1 style={{ color: textColor}}>TextColor</h1>
    </div>
  )
}

const BackgroundColor: React.VFC = () => {
  const [background, setBackground] = useState('white')
  return (
    <div>
      <label>backgroundColor</label>
      <input 
        type="color" 
        onChange={(e) => setBackground(e.target.value)}
      />
      <h1 style={{ background: background}}>BackGround</h1>
    </div>
  )
}

const Opacity: React.VFC = () => {
  const [opacity, setOpacity] = useState<number>(1)
  return (
    <div>
      <label>opacity</label>
      <input 
        type="range" min="0" max="1" step="0.1" 
        onChange={(e) => setOpacity(Number(e.target.value))}
      />
      <h1 style={{ opacity: opacity}}>{ opacity }</h1>
    </div>
  )
}

const BorderRadius: React.VFC = () => {
  const [borderRadius, setBorderRadius] = useState<number>(10)
  return (
    <div>
      <label>borderRadius</label>
      <input 
        type="range" min="0" max="40" step="1" value={(borderRadius)}
        onChange={(e) => setBorderRadius(Number(e.target.value))}
      />
      <h1>{borderRadius}</h1>
      <div style={{ width: 50, height: 50, background: 'blue', borderRadius: borderRadius}}></div>
    </div>
  )
}

const FontSize: React.VFC = () => {
  const [fontSize, setFontSize] = useState<number>(10)
  return (
    <div>
      <label>fontSize</label>
      <input 
        type="range" min="10" max="40" step="1" value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
      />
      {fontSize}
      <p style={{ fontSize: fontSize + 'px'}}>FontSize</p>
    </div>
  )
}

const Disabled: React.VFC = () => {
  const [isDisabled, setDisabled] = useState<boolean>()
  return (
    <div>
      <label>disabled</label>
      <input 
        type="checkbox" v-model="disabled" 
        onClick={() => setDisabled(!isDisabled)}
        disabled={isDisabled}
      />
    </div>
  )
}

const ButtonText: React.VFC = () => {
  const [buttonText, setButtonText] = useState<string>()
  return (
    <div>
      <label>button text</label>
      <input 
        type="text" v-model="buttonText" 
        onChange={(e) => setButtonText(e.target.value)}
      />
      <div>
        {buttonText}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="typeScript"/>
        <Color />
        <BackgroundColor />
        <Opacity />
        <BorderRadius />
        <FontSize />
        <Disabled />
        <ButtonText />
      </header>
    </div>
  );
}

export default App;
