import "./dropdown.css"

const dropDown = () => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e);
    };
    return (
        <select onChange={handleChange}>
            <option value="svar-a">A</option>
            <option value="svar-b">B</option>
            <option value="svar-c">C</option>
        </select>
    );
}


export default dropDown;