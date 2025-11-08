type UserProfileProps = {
	username: string;
};

function UserProfile({ username }: UserProfileProps) {
	return <h1 className="text-2xl font-bold">{username}</h1>;
}

export default UserProfile;
