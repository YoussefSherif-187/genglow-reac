import { Navigate, Outlet } from 'react-router-dom'
const Privateroutes = () => {
  let auth = {'token':true}
return (
    auth.token ? <Outlet/> : <Navigate to='/signup'/>
  )
}


export default Privateroutes