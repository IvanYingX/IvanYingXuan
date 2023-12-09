import { Suspense } from "react";
import profile from "../../images/Profile.jpg";
const ProfilePicture = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <img src={profile} alt="random" className="profile-image" />
        </Suspense>
    );
}

export default ProfilePicture;
