import { Suspense } from "react";
import profile from "../../images/pfp.jpg";
import { Box } from "@mui/material";
import { useIsPhone } from "../../hooks";

const ProfilePicture = () => {
    const isPhone = useIsPhone();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img 
                    src={profile} 
                    alt="random" 
                    className="profile-image" 
                style={{
                    borderRadius: '50% / 40%',
                    width: isPhone ? '40%' : '80%',
                    height: 'auto'
                }}
            />
            </Box>
        </Suspense>
    );
}

export default ProfilePicture;
