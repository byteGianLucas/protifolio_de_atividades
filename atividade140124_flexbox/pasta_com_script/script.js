// ---------------------------------------------------------------------------------------------------------------
//ATIVIDADE 1

//HTML 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Atividade 1</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>

//     <section>
//         <div class="container">
//             <div class="ball-blue"></div>
//             <div class="ball-orange"></div>
//         </div>
//     </section>
// </body>
// </html>

//CSS

// body {
//     margin: 0;
//     padding: 0;
// }


// .container {
//     width: 100%;
//     height: 933px;
//     background-color: gray;
//     display: flex;
//     align-items: center;    
//     justify-content: space-between;
// }

// .ball-blue {
//     width: 150px;
//     height: 150px;
//     background-color: blue;
//     border-radius: 100%;
//     border: 1px black solid;
// }

// .ball-orange {
//     width: 150px;
//     height: 150px;
//     background-color: orange;
//     border-radius: 100%;
//     border: 1px black solid;
// }

// ---------------------------------------------------------------------------------------------------------------

//ATIVIDADE 2

//HTML 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Atividade 2</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>

//     <div class="container">
//         <div class="square">
//             <div class="blueSquare"></div>
//             <div class="blueSquare"></div>
//         </div>

//         <div class="circle"></div>
//     </div>
    
// </body>
// </html>

//CSS

// * {
//     margin: 0;
//     padding: 0;
//     background-color: gray;
// }

// .container {
//     height: 100vh;
//     display: flex;
//     flex-direction: column-reverse;
//     align-items: flex-end;
//     justify-content: space-between;
// }

// .square {
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
// }

// .blueSquare {
//     width: 100px;
//     height: 100px;
//     background-color: blue;
//     border: 1px solid;
// }

// .circle {
//     align-self: flex-end;
//     width: 100px;
//     height: 100px;
//     border-radius: 100%;
//     background-color: orange;
//     border: 1px solid;
// }

// ---------------------------------------------------------------------------------------------------------------

//ATIVIDADE 3

//HTML

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Growdev - Tweet</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link
//             href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
//             rel="stylesheet"
//         />

//         <link rel="stylesheet" href="style.css" />
//         <!-- <link rel="stylesheet" href="styles-resolucao.css" /> -->
//     </head>
//     <body>
//         <div id="header">
//             <div class="wrapper">
//                 <img
//                     src="https://yt3.googleusercontent.com/CwaU9iS39jXiKXcB_-fq6QxaW4UFpxk5JUyujegx0SRfk03qvAtzLBcqH7tX-Jk4wKM9Dvh5Hg=s900-c-k-c0x00ffffff-no-rj"
//                     alt="Growdev's Profile Image"
//                     class="profile-thumbnail"
//                 />
//                 <div class="profile-name">
//                     <h3>Growdev</h3>
//                     <h4>@growdev</h4>
//                 </div>
                
//             </div>
//             <div id="follow">
//                 <button>Follow</button>
//             </div>
//         </div>

//         <div id="inner">
//             <p>
//                 O Programa Starter, além de uma formação completa em
//                 Desenvolvimento Web Full Stack, com metodologia de ensino e
//                 tecnologias direcionadas para o que as empresas demandam, tem o
//                 principal objetivo de preparar e apoiar a sua inserção no
//                 mercado de trabalho.
//             </p>
//             <span class="date">1:32 PM - 12 Jan 2023</span>
//             <hr />
//         </div>

//         <section id="footer">
//             <div id="stats">
//                 <div class="Retweets"><strong>320</strong> Replies</div>
//                 <div class="Retweets"><strong>107</strong> Retweets</div>
//                 <div class="likes"><strong>431</strong> Likes</div>
//                 <div class="likes"><strong>1025</strong> Views</div>
//             </div>

//             <div id="buttons">
//                 <button class="share-btn">Share</button>
//                 <button class="retweet-btn">Retweet</button>
//                 <button class="like-btn">Like</button>
//             </div>
//         </section>
//     </body>
// </html>


// CSS CODE

// html {
//     background-color: #f3f3f3;
// }

// body {
//     font-family: "Lato", Arial, sans-serif;
//     width: 40%;
//     margin: auto;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     padding: 12px 16px;
//     margin-top: 12px;

//     background-color: #fefefe;
// }

// #header .profile-thumbnail {
//     width: 120px;
//     height: 120px;
//     border-radius: 4px;
//     animation: name duration timing-function delay iteration-count direction
//         fill-mode play-state;
// }
// #header .profile-name {
//     margin-left: 10px;
// }
// #header .follow-btn {
//     margin: 0 0 0 auto;
    
// }
// #header button {
//     border: 0;
//     border-radius: 3px;
//     padding: 5px;
// }
// #header h3,
// #header h4 {
//     margin: 0;
// }

// #inner p {
//     margin-bottom: 10px;
//     font-size: 20px;
// }
// #inner hr {
//     margin: 20px 0;
//     border-style: solid;
//     opacity: 0.1;
// }

// @keyframes example {
//     0% {
//         background-color: red;
//     }
//     27% {
//         background-color: blue;
//     }
//     60% {
//         background-color: yellow;
//     }
//     100% {
//         background-color: green;
//     }
// }

// #footer {
//     display: flex;
//     justify-content: end;
//     justify-content: space-between;
// }

// #footer #stats {
//     font-size: 15px;
// }

// #footer #stats strong {
//     font-size: 20px;
// }

// #footer .buttons {
//     margin-left: auto;
// }

// #footer .buttons button {
//     border: 0;
// }

// #header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

// }

// #header .wrapper {
//     display: flex;
//     align-items: center;
// }

// #follow {
//     justify-self: flex-end;
// }

// ---------------------------------------------------------------------------------------------------------------
