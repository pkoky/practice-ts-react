type ColorProps = {
  color: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Color: React.VFC<ColorProps> = ({color, onChange}) => {
  
  return (
    <div>
      <label>color</label>
      <input 
        type="color" 
        onChange={onChange}
      />
      { color }
    </div>
  )
}

export { Color }