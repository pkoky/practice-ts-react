
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textValue: string;

}

const ButtonText: React.VFC<Props> = (props) => {
  return (
    <div>
      <label>button text</label>
      <input 
        type="text" 
        onChange={props.onChange}
      />
    </div>
  )
}

export { ButtonText }