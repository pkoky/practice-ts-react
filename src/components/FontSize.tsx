type fontProps = {
  fontSize: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FontSize: React.VFC<fontProps> = ({fontSize, onChange}) => {
  return (
    <div>
      <label>fontSize</label>
      <input 
        type="range" min="10" max="40" step="1" value={fontSize}
        onChange={onChange}
      />
      {fontSize}
    </div>
  )
}

export { FontSize }