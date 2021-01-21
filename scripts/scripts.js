//создаем универсальный класс
class FetchData {
    getResourse = async url => {
        const res = await fetch(url);
        if(!res.ok){
            //throw прерывание кода
            throw new Error('произощла ошибка' + res.status)
        }

        return res;
    }

     //получили данные и вернули
    // getPost = () => {
    //    return this.getResourse('db/database.json')
    // }
    //можно и так записать сокращенно
    getPost = async () => await this.getResourse('db/database.json');

}

// console.log(new FetchData().getPost());
new FetchData().getPost().then((data) => {
    console.log(data);
});

//само приложение
class Twitter {
    constructor({ listElem }){
        this.tweets = new Posts();
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
    constructor({ posts = [] } = {}){
        this.posts = posts;//массив будем получать с сервера

    }

    //Добавить пост
    addPost(tweet){
        console.log(tweet);
        this.posts.push(new Post(tweet));
        
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
    //param диктруктурирум 38:18
    //если нет лайков likes=0
    constructor({ id,userName,nikeName,postDate,text,img,likes=0 }){
        //если id true- вернется id ,если нет , то вернется  this.generateID()
        // this.id = id ? id :  this.generateID();
        this.id = id || this.generateID();
        this.userName = userName;
        this.nikeName = nikeName;
        //если получать дату new Date, если postDate нет в базе данных, т.е это новый пост, тогда нужно получить текующую дату
        this.postDate = postDate ? new Date(postDate) : new Date ;
        this.text = text;
        this.img = img;
        this.likes = likes;
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
    //метод генерировать id
    generateID(){
        //получаем теккщую дату
        return Math.random().toString(32).substring(2,9) + (+new Date).toString(32);
    }

    //получаем и форматируем дату
    getDate(){
        const options = {
            year: 'numeric',
            month: 'numeric',
            day : 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        //текущую дату
        return this.postDate.toLocaleString(' ru-Ru', options );
    }
}


const twitter = new Twitter ({
    listElem : '.tweet-list'
})
// console.log('twitter', twitter);

// twitter.tweets.addPost({
    
//     userName : 'Натали',
//     nikeName : 'Nataly',
//     postDate :'01.05.2021',
//     text :'супер идея',
//     img : '',
//     likes : 50,
//     liked : true,
// })

// console.log((+new Date).toString(32));
// console.log(Math.random().toString(32).substring(2,9) + (+new Date).toString(32));

