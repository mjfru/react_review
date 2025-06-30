import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<button
			type="submit"
			className="uppercase btn btn-primary btn-block"
			disabled={isSubmitting}
		>
			{isSubmitting ? (
				<>
					<span className="loading loading-spinner"></span>
					Working...
				</>
			) : (
				text || "submit"
			)}
		</button>
	);
};

export default SubmitButton;
