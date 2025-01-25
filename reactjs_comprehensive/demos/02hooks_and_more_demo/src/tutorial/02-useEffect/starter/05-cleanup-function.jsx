import { useEffect, useState } from "react";

const CleanupFunction = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<div>
			<h2>Cleanup Function Challenge</h2>
			<button className="btn" onClick={toggleActive}>
				Toggle State
			</button>
			{isActive && <UseEffectComponent />}
		</div>
	);
};

const UseEffectComponent = () => {
  //? So, this still fires off every time despite the dependency array being empty.
  //? This is because changing the state causes the page to mount and unmount.
	useEffect(() => {
    // console.log("Set to active!")
    // const intId = setInterval(() => {
    //   console.log("Interval has finished")
    // }, 1000)
    // //! Enter a cleanup function
    // return () => {
    //   clearInterval(intId);
    //   console.log('Cleanup complete')
    // }
    //! Working with event listeners and cleaning them up:
    const someFunction = () => {
      console.log('Scrolling....')
    };
    window.addEventListener('scroll', someFunction)
    // return () => window.removeEventListener('scroll', someFunction);
	}, []);
  return <h2>State is set to active!</h2>
};

export default CleanupFunction;
