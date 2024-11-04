import axios from "axios";

// veri alakalı her türlü yapıyı modelde tanımlarız
// model oluştururken genelede classları tercih  ederiz

export default class ListPageModel{
     
    //API'den gelen verileri  alıp fonk. çağrıldığı yere gönderir.
    static async getPosts(){
        const res = await axios.get('http://localhost:3076/posts');
        return res.data;
    }
}



