type OpacityProps = {
  opacity: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Opacity: React.VFC<OpacityProps> = ({opacity, onChange}) => {  
  return (
    <div>
      <label>opacity</label>
      <input 
        type="range" min="0" max="1" step="0.1" 
        onChange={onChange}
      />
      { opacity }
    </div>
  )
}

export { Opacity }