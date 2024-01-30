function addPlayer() {
    let playerNameInput = document.getElementById('playerName');
    let playerName = playerNameInput.value;
    let playerId = new Date().getTime(); 
    playerNameInput.value = '';
    localStorage.setItem(playerId.toString(), playerName);
    displayPlayers();
  }
  function displayPlayers() {
    let playersList = document.getElementById('playersList');
    playersList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
      let playerId = localStorage.key(i);
      let playerName = localStorage.getItem(playerId);
      let playerDiv = document.createElement('div');
      playerDiv.textContent = `ID: ${playerId}, Name: ${playerName}`;
      playersList.appendChild(playerDiv);
    }
  }
  document.addEventListener('DOMContentLoaded', displayPlayers);
  