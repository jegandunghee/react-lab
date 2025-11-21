const Profile = ({img, name, job}) => {
  return (
    <div className="profile_card">
      <img src={img} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{job}</p>
    </div>

  );
}

export default Profile;