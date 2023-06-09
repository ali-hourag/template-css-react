import { Navbar } from "./Navbar"
import { SearchBar } from "./Searchbar"
import "./Header.css"


export const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <SearchBar />
        </header>
    )
}