import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {InAction} from './Component/actions';
import {DecAction} from './Component/actions';

const App = () => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>{counter}</h1>
     <button onClick = {() => dispatch(InAction())}>Increment</button>
     <button onClick = {() => dispatch(DecAction())}>Decrement</button>
    </div>
  );
}
//const mapStateToProps = state => ({local_variable : state})
export default (App);
