export default function Input({inputValue, setInputValue}) {
  return (
    <input 
    type="text" 
    name="qr-code"
    placeholder="Enter your phrase..."
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />
  )
}