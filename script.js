
const form = document.getElementById("destination-form");
const container = document.getElementById("destination-container");
const detailDisplay = document.getElementById("message"); 


let savedDestinations = JSON.parse(localStorage.getItem("myPlaces")) || [];


function Place(name, dest, landmarks, time, country, review) {
    this.name = name;
    this.dest = dest;
    this.landmarks = landmarks;
    this.time = time;
    this.country = country;
    this.review = review;
}


Place.prototype.createCardHTML = function(index) {
    return `
        <div class="destination-card">
            <h3 class="card-title" onclick="showDetails(${index})" style="cursor:pointer; text-decoration: underline;">
                <strong>${this.dest}</strong>
            </h3>
            <p style="font-size: 1rem;">Added by: ${this.name}</p>
            <button class="delete-btn" onclick="deleteCard(${index})">Remove</button>
        </div>
    `;
};

function renderCards() {
    container.innerHTML = ""; 

    savedDestinations.forEach((data, index) => {

        const item = new Place(data.name, data.dest, data.landmarks, data.time, data.country, data.review);
        container.innerHTML += item.createCardHTML(index);
    });
}


renderCards();


document.getElementById("submit").onclick = function(event) {
    event.preventDefault();


    const newPlace = new Place(
        document.getElementById("name").value,
        document.getElementById("destination").value,
        document.getElementById("landmarks").value,
        document.getElementById("time").value,
        document.getElementById("country").value,
        document.getElementById("review").value
    );

    document.getElementById("main-title").textContent = newPlace.name + " was here";

    savedDestinations.push(newPlace);
    localStorage.setItem("myPlaces", JSON.stringify(savedDestinations));

    renderCards();
    form.reset();
};

window.showDetails = function(index) {
    const data = savedDestinations[index];
    
    
    detailDisplay.innerHTML = `
        <div style="background: #eeedbe; padding: 15px; border-radius: 30px; margin-top: 20px; border: 2px solid #333; width: auto;">
            <p><strong>Full Details for ${data.dest}:</strong></p>
            <ul>
                <li>Country: ${data.country}</li>
                <li>Landmarks: ${data.landmarks}</li>
                <li>Best Time: ${data.time}</li>
                <li>Notes: ${data.review}</li>
            </ul>
            <button class="delete-btn" onclick="closeDetails()">Close Details</button>
        </div>
    `;
};


window.closeDetails = function() {
    detailDisplay.innerHTML = `
        <div style="background-color: black; color: white; padding: 15px; border-radius: 30px; margin-top: 20px; border: 2px solid #333; width: auto;">
            </div>
    `;
};


window.deleteCard = function(index) {
    savedDestinations.splice(index, 1);
    localStorage.setItem("myPlaces", JSON.stringify(savedDestinations));
    renderCards();
};