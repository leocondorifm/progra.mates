import './Search.css';

const Search = () => {

    return (
        <div className="header__search">
        <form action="">
          <input type="text" placeholder="Search" />
          <button><i className="material-icons">search</i></button>
        </form>
      </div>
    )

}

export default Search