type BorderRadiusProps = {
  borderRadius: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BorderRadius: React.VFC<BorderRadiusProps> = ({borderRadius, onChange}) => {
  return (
    <div>
      <label>borderRadius</label>
      <input 
        type="range" min="0" max="40" step="1" value={(borderRadius)}
        onChange={onChange}
      />
      {borderRadius}
      <div style={{ width: 50, height: 50, background: 'blue', borderRadius: borderRadius}}></div>
    </div>
  )
}

export { BorderRadius }