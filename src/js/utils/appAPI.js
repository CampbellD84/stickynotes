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
  },

  removeNote: function(noteId) {
    $.ajax({
      url: "https://api.mlab.com/api/1/databases/stickynoteapp/collections/notes/"+noteId+"?apiKey=KbXt944utNCKHTrTw36pqoBfhX5D-mMp",
      type: "DELETE",
      async: true,
      timeout: 300000,
      success: function(data) {
        console.log('Note Deleted');
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  }
}
