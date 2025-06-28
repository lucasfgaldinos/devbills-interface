import { AppProvider } from "./hooks"
import { Home } from "./screens/home"

function App() {
	return (
		<AppProvider>
			<Home />
		</AppProvider>
	)
}

export default App
