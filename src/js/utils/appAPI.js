var AppActions = require('../actions/AppActions');

module.exports = {
  addNote: function(note) {
    $.ajax({
      url: "https://api.mlab.com/api/1/databases/stickynoteapp/collections/notes?apiKey=KbXt944utNCKHTrTw36pqoBfhX5D-mMp",
      data: JSON.stringify(note),
      type: "POST",
      contentType: "application/json"
    });
  },

  getNotes: function() {
    $.ajax({
      url: "https://api.mlab.com/api/1/databases/stickynoteapp/collections/notes?apiKey=KbXt944utNCKHTrTw36pqoBfhX5D-mMp",
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log(data);
        AppActions.receiveNotes(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  }
}
