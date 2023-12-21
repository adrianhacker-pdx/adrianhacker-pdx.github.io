import { Sandpack } from "@codesandbox/sandpack-react"
import { freeCodeCampDark } from "@codesandbox/sandpack-themes";;

const App = () => {
  const files = {}
  
  return (
    <Sandpack
      files={files} 
      theme={freeCodeCampDark} 
      template="static"
    />
  )  
}