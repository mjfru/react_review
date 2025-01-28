import { useState } from "react";

const Tour = ({ id, name, image, info, price, deleteTour }) => {
	const [ readMore, setReadMore ] = useState(false);
  
  //? Using the substring method returns a portion of a specified string.

  return (
		<article className="single-tour">
			<img src={image} alt={name} className="img" />
			<span className="tour-price">${price}</span>
			<div className="tour-info">
				<h5>{name}</h5>
				<p>{readMore ? info : `${info.substring(0, 150)}...`}
          <button className="info-btn" type="button" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : 'Show more'}</button>
        </p>
				<button
					type="button"
					className="btn btn-block delete-btn"
					onClick={() => deleteTour(id)}
				>
					Not Interested
				</button>
			</div>
		</article>
	);
};

export default Tour;
