const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const myContainer = document.getElementById('container');

let myLikes

for(let i = 0; i < posts.length; i++) {

    myContainer.innerHTML += 

    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${posts[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label" id="likeButton">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${i}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    
}

const likeButtons = document.querySelectorAll('.js-like-button');



likeButtons.forEach((button, i) => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); 

        const likeButtonLabel = button.querySelector('.like-button__label');

        const likeButtonIcon = button.querySelector(".like-button__icon");

        const likesCounter = document.getElementById(`like-counter-${i}`);

        if (likeButtonIcon.classList.contains("like-button--liked")
            && 
            likeButtonLabel.classList.contains("like-button--liked")) {

            likeButtonIcon.classList.remove("like-button--liked");

            likeButtonLabel.classList.remove("like-button--liked");

            posts[i].likes--;

            likesCounter.textContent = posts[i].likes;
        } else {

            likeButtonLabel.classList.add("like-button--liked");

            likeButtonIcon.classList.add("like-button--liked");

            posts[i].likes++; 

            likesCounter.textContent = posts[i].likes;

        }  
    });
});



