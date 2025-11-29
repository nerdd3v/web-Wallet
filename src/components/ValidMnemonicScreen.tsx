//@ts-ignore
function ValidMnemonicScreen({bool}) {

    const text = (bool)? 'redirecting to the wallet': 'invalid mnemonic'
  return (
    <div className="bg-transparent h-screen w-screen opacity-40 flex justify-center items-center">
        <div className="h-1/4 w-1/4 bg-blue-500">
            {text}
        </div>
    </div>  
  )
}

export default ValidMnemonicScreen
