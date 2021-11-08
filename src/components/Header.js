import Nav from "./Nav"

export default function Header({ currentPage,  handPageChange, value, setValue }) {
    return (
        <div>
            <Nav currentPage={currentPage} handPageChange={handPageChange} value={value} setValue={setValue}/>
        </div>
    )
};