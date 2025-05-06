import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Form from './Form';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  // const [name, setName] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name) {
  //     alert('Please Provide Name Value');
  //     return;
  //   }
  //   addPerson();
  //   setName('');
  // };
  
  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  
  return (
    <section>
      {/* <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='btn btn-block' type='submit'>
          submit
        </button>
      </form> */}
      <Form addPerson={addPerson}/>
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
