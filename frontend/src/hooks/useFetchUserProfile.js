import { useEffect, useState } from "react";
import { getUserProfile } from "../api/userProfile";

const useFetchUserProfile = (token) => {
  const [profileData, setProfileData] = useState({
    displayName: "",
    profilePicture: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(token);
        setProfileData({
          displayName: userProfile.displayName || "",
          profilePicture: userProfile.profilePicture || null,
        });
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        setError(error);
      }
    };

    fetchUserProfile();
  }, [token]);

  return { profileData, setProfileData, error };
};

export default useFetchUserProfile;
