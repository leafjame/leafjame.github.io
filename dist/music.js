const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  lrcType: 0,
  audio: [
    {
      name: '无尽光芒',
      artist: '许巍',
      url: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/music/Endless_light.mp3',
      cover: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/img/articles/15/1.jpg',
    },
    {
      name: '夕阳中的城市',
      artist: '许巍',
      url: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/music/sunset_city.mp3',
      cover: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/img/articles/15/1.jpg',
    },
    {
      name: '心中的歌谣',
      artist: '许巍',
      url: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/music/heart_song.mp3',
      cover: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/img/articles/15/1.jpg',
    },
    {
      name: '远航',
      artist: '许巍',
      url: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/music/Voyage.mp3',
      cover: 'https://cdn.jsdelivr.net/gh/leafjame/cdn/img/articles/15/1.jpg',
    }
  ]
});
