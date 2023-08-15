// const heading = React.createElement(
//   'h1',
//   {
//     id: 'heading',
//   },
//   'hello world from react'
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'hi i am h1 tag'),
    React.createElement('h2', {}, 'hi i am h2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'hi i am h1 tag'),
    React.createElement('h2', {}, 'hi i am h2 tag'),
  ]),
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
