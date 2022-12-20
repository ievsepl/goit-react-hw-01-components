
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'

export const FriendList = ({friends}) => <ul className="friend-list">
    
    {friends.map(friend => <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}        
    />)}    
</ul>

// FriendList.propTypes = {
//   friend.id:PropTypes.string,
 
// }