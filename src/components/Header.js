import Navigation from "./Navigation"

export default function Header({ currentPage,  handPageChange, value, setValue }) {
    return (
        <div>
            <Navigation currentPage={currentPage} handPageChange={handPageChange} value={value} setValue={setValue}/>
        </div>
    )
};