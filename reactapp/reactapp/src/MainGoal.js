//import logo from './logo.svg';
import './styles.css';

function MainGoal() {
  return (
    <div className="MainGoal">
      <h1 className="h1">TIME TO PRACTICE</h1>
      <p className='ligne'>
      Build a <code className='tag'>&lt;MainGoal&gt;</code> component and insert it below this text.
      </p>
      <p className='ligne'>
      Your <code className='tag'>&lt;MainGoal&gt;</code> component should simply output some text that describes your main goal (e.g, 'My main goal: Learn React in great detail").
      </p>
      <p className='ligne'>
      <code className='tag2'>Important</code> : you custom component must contain the next 'my main goal'.
      </p>
      <p className='ligne'>
      <code className='tag2'>Also important</code> : for the automatic checks to succeed , you <code className='must'>must export </code> your custom component function ! Not as a default but simply by adding the <code className='tag'>export </code>keyword in front of your function (e.g, <code className='tag'>export function YOUR_COMPONENT_NAME</code>).
   </p>
    </div>
  );
}

export default MainGoal;
