import { Feed } from "./components/Feed"
import { Navigation } from "./components/Navigation"
import { Recomendations } from "./components/Recomendations"

function App(): JSX.Element {
  return (
    <div className="bg-dark text-light w-screen h-full min-h-screen flex flex-row">
      <Navigation />
      <Feed />
      <Recomendations />
    </div>
  )
}

export default App
