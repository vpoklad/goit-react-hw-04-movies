export default function MoviesPage() {
  return (
    <>
      <h1 className="pageTitle">Movies</h1>
      <div className="container">
        <form>
          <label htmlFor="input">
            Search
            <input type="text" />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}
