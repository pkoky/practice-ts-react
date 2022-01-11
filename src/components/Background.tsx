type BackgroundProps = {
  background: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BackgroundColor: React.VFC<BackgroundProps> = ({background,onChange}) => {
  return (
    <div>
      <label>backgroundColor</label>
      <input 
        type="color" 
        onChange={onChange}
      />
      {background}
    </div>
  )
}

export { BackgroundColor }