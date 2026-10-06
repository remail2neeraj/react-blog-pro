import CounterReducer from '../testing/CounterReducer';
import TodoManager from '../testing/TodoManager';
import UserInfo from '../context/UserInfo';
import Dashboard from '../testing/Dashboard';
import TodoProvider from '../context/TodoProvider';
import UsersProvider from '../context/UsersProvider';
import UsersApp from '../components/UsersApp';

const About = () => {
  return (
    <>
      <h2>About us</h2>
      <br/>
       <CounterReducer/>
      <br/><br/><br/>
      {/* <TodoManager/> */}
      
      <h4>Data is comming from the useContext</h4>
      <UserInfo />
      {/* <Dashboard /> */}
      <br /> <br />
      <TodoProvider>
        <TodoManager/>
      </TodoProvider>

      <br /><br />
      <UsersProvider>
        <UsersApp />
      </UsersProvider>
    </>
  )
}

export default About
