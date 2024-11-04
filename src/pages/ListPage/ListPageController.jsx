import { useEffect, useState } from "react"
import ListPageView from "./ListPageView"
import Model from "./ListPageModel"


// controller bileşeninde kullanıcı etkileşimi ile tetiklenen fonksiyonlar
// state tutulur.

const ListPageController = () => {
   const [posts, setPosts] = useState(null);   
   const [isOpen, setIsOpen] = useState(null);

   // useEffect ile de kullanıcı etkileşimi izlediğimiz controller'd tanımlanır.
    useEffect(() => {
      Model.getPosts().then((data) => setPosts(data));   
    }, []);

    // controleler bileşeninde arayüz ( jsx kodu ) yazmayız
    //  View bileşenini döndürürüz
    return (
    <ListPageView 
     isOpen={isOpen}
     setIsOpen={setIsOpen}
     posts={posts} 
    
    />
  )
}

export default ListPageController;