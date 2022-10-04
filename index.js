const Navbar = () => {
  return <h1>This is the Navigation bar</h1>
}
const MyComponent = () => {
  return <h2>This is my component</h2>
}

ReactDOM.render(
  <div>
    <Navbar />
    <MyComponent />
  </div>,
  document.querySelector('#root')
)
