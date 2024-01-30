document.getElementById('deleteButton').addEventListener('click', function() {
    let playerId = document.getElementById('playerIdInput').value;
    xoaCauThuTheoId(playerId);
  });
  function xoaCauThuTheoId(id) {
    console.log("Đang xóa cầu thủ có ID:", id);
  }
  