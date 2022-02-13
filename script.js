
// ----- GOOGLE MAPS API INTEGRATION ----- //
function initMap() {

    const location = { lat: 60.82138, lng: 27.08760 };
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// LOCATE ON MAP BUTTON
window.onload=function(){

    const popup = document.querySelector(".bg-modal");

    document.querySelector(".locate").addEventListener("click", () => {
        popup.style.display = "block";
    })

    document.querySelector(".close").addEventListener("click", () => {
        popup.style.display = "none";
    })
}
