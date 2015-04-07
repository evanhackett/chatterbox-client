// YOUR CODE HERE:


var app ={
  server: 'https://api.parse.com/1/classes/chatterbox',
  init: function() {},
  send: function(message) {
    $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
  },
  fetch: function() {
    $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: {},
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
    });
  },
  clearMessages: function() {
    $('#chats').empty();
  },
  addMessage: function(message) {
    $('#chats').append('<p>' + '<span class="username">' + message.username + '</span> : ' + message.text + '</p>');
    $('.username').click( function () {
        app.addFriend();
    });
  },
  addRoom: function(room) {
    $('#roomSelect').append('<p>' + room + '</p>');
  },
  addFriend: function() {
    console.log('add friend');
  },
  handleSubmit: function() {

  }
};

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
  }
}  

$( document ).ready(function() {

    var whoami = getUrlParameter('username');
    $('.username').text(whoami);
    
    $('.username').click( function () {
        app.addFriend();
    });

    $('.submit').click( function () {
        app.handleSubmit();
    });
});