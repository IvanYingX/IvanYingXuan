import { Suspense } from "react";
import profile from "../../images/pfp.jpg";
import { Box } from "@mui/material";
const ProfilePicture = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img 
                    src={profile} 
                    alt="random" 
                    className="profile-image" 
                style={{
                    borderRadius: '50% / 40%',
                    width: '80%',
                    height: 'auto'
                }}
            />
            </Box>
        </Suspense>
    );
}

export default ProfilePicture;
