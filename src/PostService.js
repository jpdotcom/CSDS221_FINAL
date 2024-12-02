import axios from  'axios';

const url='api/posts/';


class PostService{


    //Get Posts
    static async getPosts(){
    
            try{
                const data= await axios.get(url).then(response => response.data)
                
                return data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }));

                
            }catch(err){
                console.log("HS")
                throw err;

            }
    }
    //Create Post
    
    static insertPost(text){
        return axios.post(url,{text});
    }

    //Delete Post
    static deletePost(id){
        return axios.delete(`${url}${id}`)
    }

}

export default PostService;
