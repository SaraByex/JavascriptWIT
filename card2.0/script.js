// const student = {
//     firstname: "Cindy",
//     course: "Javascript",
//     sing(){
//         this.firstname += "Can sing"
//     }
// }



// class Student {
//     constructor(firstname, course){
//         this.firstname = firstname;
//         this.course = course;
//     }

//     sing(){
//         this.firstname += " Yolande";
//         console.log(`${this.firstname} is taking the course ${this.course}`)
//     }
// }

// const carole = new Student("Carole", "Javascript")

// carole.sing()

//card code starts here
class User {
    constructor(level, imageURL, points, name, description, color){
        this.level = level;
        this.imageURL = imageURL;
        this.points = points;
        this.name = name;
        this.description = description;
        this.color = color;
    }
}

let manoshree = new User(
    10, 
    "https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png",
    32145,
    "Manoshree",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "blue"
)

let olesia = new User(
    20,
    "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg",
    4215,
    "Olesia",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "red"
)

let ellie = new User(
    25,
    "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
     3463,
    "Ellie",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "purple"
)

let faranak = new User(
    11,
    "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",
    45688,
    "Faranak",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "yellow"
)

let users = [];

users.push(manoshree);
users.push(faranak);
users.push(ellie);
users.push(olesia);

console.log(users)

//add user card to DOM
function addUserCardToDOM(user){
    //get the card container from the dom
    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML += `<div class="card">
                <!-- left hand side of the card -->
                <div class="left-info" style="--background-color: ${user.color}">
                    <div>
                        <!-- user level -->
                        <p id="user-level">Level ${user.level}</p>
                    </div>
                    <div>
                        <!-- user image -->
                        <img src=${user.imageURL}>
                    </div>
                    <div>
                        <!-- user points -->
                       <p id="user-points-${user.name}">${user.points} points</p> 
                    </div>
                    <div class="flex-wrap">
                        <div>
                            <!-- button to decrease the points -->
                            <button class="plus-minus-button" onclick="decrementPoints('${user.name}')">-</button>
                        </div>
                        <div>
                            <!-- button to increase the points -->
                            <button class="plus-minus-button" onclick="incrementPoints('${user.name}')">+</button>
                        </div>
                    </div>
                </div>
                <!-- right hand side of the card -->
                <div class="right-info">
                    <header>
                        <h1>${user.name}</h1>
                    </header>
                    <div>
                        <p id="user-description">
                        ${user.description}
                        </p>
                    </div>
                    <div class="linkedin-link">
                        <a href="https://www.linkedin.com/feed/">
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                    </div>
                </div>
            </div>`

}


function renderUsersToDOM(users){
    document.getElementById("card-container").innerHTML = "";
    for(user of users){
        addUserCardToDOM(user)
    }
}

renderUsersToDOM(users)

function incrementPoints(username){
    //find the user in the array
    const user = users.find((user) => user.name === username);
    console.log(user);
    //increase the point
    user.points += 1;

    const pointsLabel = document.getElementById(`user-points-${user.name}`);
    pointsLabel.textContent = `${user.points} points`
}

//task for you replicate the same for decrement

//sort

function sortUsers(){
    let sortproperty = document.getElementById("sortCard").value;
        
    users.sort((a, b)=> (a[sortproperty] > b[sortproperty] ? 1 : -1))

    renderUsersToDOM(users)

}

//using the array, calculate the total points
