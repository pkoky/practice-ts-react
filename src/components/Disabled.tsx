type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Disabled: React.VFC<Props> = ({onChange}) => {
  return (
    <div>
      <label>disabled</label>
      <input 
        type="checkbox" 
        onChange={onChange}
      />
    </div>
  )
}

export  { Disabled }