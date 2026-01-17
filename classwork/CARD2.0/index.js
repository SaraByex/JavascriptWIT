// create instances - constructor
// class Student {
//   constructor(firstname, course) {
//     this.firstname = firstname;
//     this.course = course;
//   }

//   sing(){
//     this.firstname += "can sing";
//     console.log(`${this.firstname} is taking the course ${this.course}`)
//   }
// }
// // create an instance
// const carole = new Student("Carole", "Javvascript")

// carole.sing()

// create instances - constructor


class User {
  constructor (level, imageURL, points, clientname, description, color) {
    this.level = level;
    this.imageURL = imageURL;
    this.points = points;
    this.clientname = clientname;
    this.description = description;
    this.color = color;
    
    }
}
// populate the instances
  let sarah = new User (
    20,
    "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg",
    7500, 
    "Sarah",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "blue"
  );

  let ambu = new User (
    25,
    "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
    2500, 
    "Ambu",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "red"
  );

  let carole = new User (
    31,
    "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",
    5000, 
    "Carole",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "purple"
  );

  let manoshree = new User (
    52,
    "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg",
    5400, 
    "Manoshree",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
    "yellow"
  );

 let users = [];

  users.push(sarah);
  users.push(ambu);
  users.push(carole);
  users.push(manoshree);

  console.log(users);

 // add each user card to DOM. first, create a function
  
function addUserCardToDOM(user) {
  //get the card container from the DOM
  const cardContainer = document.getElementById("card-container");
 // paste template in back-ticks `` and use += to avoid overiding 
    cardContainer.innerHTML += ` <div class="card">
                <!-- left hand side of the card -->
                <div class="left-info" style="--background-color: ${user.color}" >
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
                            <div><p id="user-points-${user.clientname}">${user.points} points</p>
                                </div> 
                                    <div class="flex-wrap">
                                        <div>
                                            <!--button to increase the points -->
                                            <button class="plusminus-button">+</button></div>
                                        <div>
                                            <!--button to decrease the points -->
                                            <button class="plusminus-button">-</button></div>
                                </div>
                        </div>
                    </div>
                <!-- right hand side of the card -->
                <div class="right-info">
                    <header>
                        <h1>${user.clientname}</h1>
                    </header>
                    <div>
                        <p id="user-description">${user.description}
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

// create a function that renders users to DOM. we shall put in our array. use a for-loop

function renderUsersToDOM(users){
  
  for (user of users) {
    addUserCardToDOM(user)
  }
}

//call the function
renderUsersToDOM(users)

//sort cards
function sortUsers(){
  let sortproperty = document.getElementById("sortCard").value;
  users.sort((a, b) => (a[sortproperty] > b[sortproperty] ? 1: -1))
  renderUsersToDOM(users)
}

function incrementPoints(username) {
 //find user in the array
  const user = users.find((user) => user.name === username);
  console.log(user);

  //increasse points
  user.points +=1
}


