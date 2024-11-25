import './App.css';
import './style.css'

function App() {
  return (
    <div class='container'>

    {/* //!Ejemplo de Single responsibility */}
    {/* <Page />
    pagina que si lo respeta el principio S 
    <ProductsPage />  */}

    {/* //!Ejemplo de open-close */}
    {/* Sin generic button  */}
    {/* <Button label='click this button' onClick={() => console.log('you actually did it')}/>
    <ErrorButton />
    <IconButton 
      label='icon button' 
      onClick={() => console.log('you clicked on this icon button')} 
      icon={reactLogo}
    /> */}

    {/* Con generic button  */}
    {/* <GenericButton onClick={() => console.log('clicked')}>
      <p>CLICK!!</p>
    </GenericButton>
    <GenericButton onClick={() => {throw new Error('Te pasaste mi loco')}}>
      <p>ERROR</p>
    </GenericButton>
    <GenericButton onClick={() => console.log('this is an icon button')}>
      <Image icon={reactLogo} alt='react logo' />
    </GenericButton> */}

    </div>
  );
}

export default App;
