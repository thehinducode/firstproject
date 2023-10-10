import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  console.log('err', err)
  return (
    <>
      <h1> its a Error mama</h1>
      <h2>error:{err.statusText}</h2>
    </>
  )
}

export default Error
