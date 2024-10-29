import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';

const ProfilePage = () => {
  let { facebookID, YouTubeID } = useParams();
  return (
    <div>
      <Menu />
      <p>Facebook={facebookID}</p>
      <p>Youtube={YouTubeID}</p>
      <h1>This is Our ProfilePage</h1>
    </div>
  );
};

export default ProfilePage;
