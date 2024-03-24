//Admin Side


{
    const socket = io("http://localhost:8080");

    function changeName(userId, newName) {
      socket.emit("changeName", userId, newName);
    }

    function changeEmail(userId, newEmail) {
      socket.emit("changeEmail", userId, newEmail);
    }

    function changeNumber(userId, newNumber) {
      socket.emit("changeNumber", userId, newNumber);
    }
}




//User Side

{
    const socket = io("http://localhost:8080");

    const userId = "userId"; // User's ID from MongoDB

    socket.emit("joinRoom", userId);

    socket.on("dataUpdated", (userData) => {
      const userDataElement = document.getElementById("userData");
      userDataElement.innerHTML = `
        <p>Name: ${userData.name}</p>
        <p>Email: ${userData.email}</p>
        <p>Number: ${userData.number}</p>
      `;
    });
}
