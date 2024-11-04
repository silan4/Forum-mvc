import axios from "axios";

export default class PopupModel {
    static async getUserPosts(user) {
    try{
      const res =   await axios.get(
        `http://localhost:3076/posts?user=${user}`
      );
      return res.data;
    } catch (err) {
      console.log(err)
    }
  } 
}