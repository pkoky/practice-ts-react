import './App.css';

type Props = {
  text: string
}

const Button: React.VFC<Props> = (props) =>  {
  return (
    <div>
        {props.text}
    </div>
  )
}

const Sample1: React.VFC = () => {
  return <div>sample1</div>
}

const Sample2= (props: Props) => {
  return <div>{ props.text }</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button text="typeScript"/>
        <Sample1 />
        <Sample2 text="sample2"/>
      </header>
    </div>

  );
}

export default App;
