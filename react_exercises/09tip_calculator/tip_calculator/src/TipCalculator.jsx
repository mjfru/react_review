import { useState } from 'react'
///
import Bill from './Bill'
import UserService from './UserService'
import Total from './Total'
import ResetButton from './ResetButton'
///

function TipCalculator() {
  
  const [bill, setBill] = useState("");
  const [userPercent, setUserPercent] = useState(10);
  const [guestPercent, setGuestPercent] = useState(10);

  const tip = bill * ((userPercent + guestPercent) / 2 / 100);

  const onReset = () => {
    setBill("");
    setUserPercent(10);
    setGuestPercent(10);
  }

    return (
      <div>
        <Bill bill={bill} onSetBill={setBill}/>
        <UserService percentage={userPercent} onSelect={setUserPercent}>How did you like the service?</UserService>
        <UserService percentage={guestPercent} onSelect={setGuestPercent}>How did your guest like the service?</UserService>
        
        {bill > 0 && (
          <>
            <Total bill={bill} userPercent={userPercent} guestPercent={guestPercent} tip={tip}/>
            <ResetButton onReset={onReset}/>
          </>
        )}
      </div>
    );
}

export default TipCalculator;