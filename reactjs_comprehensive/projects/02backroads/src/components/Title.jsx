/* eslint-disable react/prop-types */
export default function Title({title, subtitle}) {
	return (
		<div className="section-title">
			<h2>
				{title} <span>{subtitle}</span>
			</h2>
		</div>
	);
}
