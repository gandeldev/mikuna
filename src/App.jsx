import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Event } from "./pages/Event";
import Header from "./components/Header";
import { Services } from "./pages/Services";
import './App.css'
import { Footer } from "./components/Footer";

function App() {

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/*" element={<Event />} />
				<Route path="/home" element={<Home />} />
				<Route path="/services*" element={<Services />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;