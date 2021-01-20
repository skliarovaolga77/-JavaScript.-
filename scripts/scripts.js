//само приложение
class Twitter {
    constructor({listElem}){
        this.tweets = new Posts({
            posts: []
        });
        this.elements = {
            listElem: document.querySelector(listElem)
        }
    }

    renderPosts(){

    }

    chowUserPost(){

    }
    //посм авсе посты к-е лайкнул
    showLikesPost(){
        
    }

    showAllPost(){
        
    }
    //откр модалку
    openModal(){
        
    }

}
//посты
class Posts {
    //вытащили пост , если его нет = пустой [] {}
    constructor({post = []} = {}){
        this.posts = post;//массив будем получать с сервера

    }

    //Добавить пост
    addPost(tweet){
        this.tweet.push((new Post(tweet)));
    }

    //Удалить пост
    deletePost(id){
        
    }

    //лайкнуть пост
    likePost(id){

    }
}

//соз класс пост
class Post {
    //выз конст и созд объект, будем ставит лайки
    constructor(param){
        this.id = param.id;
        this.userName = param.userName;
        this.nikeName = param.nikeName;
        this.postDate = param.postDate;
        this.text = param.text;
        this.img = param.img;
        this.likes = param.likes;
        this.liked = false;
    }

    //меняет лайк 
    changeLike(){
        this.liked = !this.liked;
        //если лайк поставили - прибавлять
        if(this.liked){
            this.likes++; 
        } else {
            this.likes--; 
        }
    }
}

const twitter = new Twitter ({
    listElem : '.tweet-list'
});


console.log(twitter);

