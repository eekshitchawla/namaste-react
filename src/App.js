import Body from "./components/Body";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById('root'))
const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)
root.render(<AppLayout />)