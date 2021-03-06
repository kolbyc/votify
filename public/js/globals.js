var welcomeSource = document.getElementById('welcome-template').innerHTML,
    welcomeTemplate = Handlebars.compile(welcomeSource),
    welcomePlaceholder = document.getElementById('welcome');

var sidebarSource = document.getElementById('sidebar-template').innerHTML,
    sidebarTemplate = Handlebars.compile(sidebarSource),
    sidebarPlaceholder = document.getElementById('sidebar');

var playlistTitleSource = document.getElementById('playlist-title-template').innerHTML,
    playlistTitleTemplate = Handlebars.compile(playlistTitleSource),
    playlistTitlePlaceholder = document.getElementById('playlistTitle');

var songsSource = document.getElementById('songs-template').innerHTML,
    songsTemplate = Handlebars.compile(songsSource),
    songsPlaceholder = document.getElementById('songs');
