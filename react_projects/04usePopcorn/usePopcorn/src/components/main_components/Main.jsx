import ListBox from "./Box";
// import WatchedBox from "./WatchedBox";

//! Component Composition
//? ListBox was the only thing here that needed the movies prop; we can avoid prop drilling by doing this.
//? ListBox also doesn't need the movies directly, so we'll compose that as well.
function Main({ children }) {
  return (
    <main className="main">
      {children}
      {/* <ListBox movies={movies} />
      <WatchedBox /> */}
    </main>
  );
}

export default Main;
