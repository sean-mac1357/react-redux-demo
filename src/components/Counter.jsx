import Output from '../containers/OutputContainer';
import Increment from '../containers/IncrementContainer';
import Decrement from '../containers/DecrementContainer';

const Counter = (props) => (
    <>
        <h1>The MOST Amazing Counter App Ever</h1>
        <Output />
        <Increment />
        <Decrement />
    </>
)

export default Counter;