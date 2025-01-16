/* eslint-disable react/prop-types */
const Book = ({ image, title, author, getBook, id, index }) => {
	return (
		<article className="book">
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<button
				onClick={() => {
					getBook(id);
				}}
			>
				Click Me
			</button>
			<h4>{author}</h4>
			<span className="ranking">{index}</span>
		</article>
	);
};

export default Book;
