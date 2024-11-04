import PopupView from './PopupView';
import { useEffect ,useState  } from 'react';
import Model from './PopupModel';

const PopupController = ({isOpen , setIsOpen}) => {
        const [posts ,setPosts] = useState(null);
        
        // model açıldığında kullanıcının gönderilerini alır
        useEffect(() => {
           Model.getUserPosts(isOpen).then((data) => setPosts(data))
        } , []);  

    return (
    <PopupView  posts={posts}  isOpen={isOpen} setIsOpen={setIsOpen}/>
  )
}

export default PopupController