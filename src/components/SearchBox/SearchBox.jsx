

export default function SearchBox({value, onFilter}) {
  
    return (<div>    
      <p>Find contacts by name</p>
        <input type="text" name="filter" value={ value} onChange={(e) => onFilter(e.target.value)} />
    </div>)
};