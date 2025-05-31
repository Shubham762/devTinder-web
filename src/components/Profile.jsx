import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className="bg-red-400">
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
