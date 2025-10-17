import ProfileIcon from '../../assets/icons/profile.svg';

function Profile () {
    return (
        <div className="absolute bottom-4 left-4 p-4 w-16">
            <img src={ProfileIcon} alt="profile icon" />
        </div>
    )
}

export default Profile;