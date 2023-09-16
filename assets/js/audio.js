const isPlaying = media => !media.paused;
const play = media => (media.play(), getMediaGroupsByMedia(media).forEach(mgroup => mgroup.dataset.mediaState = "playing"));
const pause = media => (media.pause(), getMediaGroupsByMedia(media).forEach(mgroup => mgroup.dataset.mediaState = "paused"));
const stop = media => (media.pause(), media.currentTime = 0, getMediaGroupsByMedia(media).forEach(mgroup => mgroup.dataset.mediaState = "stopped"));
const allMedia = Array.from(document.querySelectorAll('audio'));
const allControls = Array.from(document.querySelectorAll('.media-control'));
const allMediaGroups = Array.from(document.querySelectorAll('.media-group'));
const getMediaByControl = control => allMedia.find(media => media.matches(control.dataset?.target));
const getControlsByMedia = media => allControls.filter(control => document.querySelector(control.dataset?.target) === media);
const getMediaGroupByControl = control => control.closest('.media-group');
const getMediaGroupsByMedia = media => getControlsByMedia(media).map(control => getMediaGroupByControl(control));
const stopAllMedia = () => allMedia.forEach(media => stop(media));

let music = document.getElementById("music");
music.volume = 0.1;
document.addEventListener('click', e => {
  if (e.target && allControls.includes(e.target)) {
    const control = e.target;
    const media = document.querySelector(control.dataset.target);
    if (isPlaying(media)) { stop(media); }
    else { stopAllMedia(); play(media); }
  }
});
document.addEventListener('ended', e => {
  if (e.target && allMedia.includes(e.target)) {
    const media = e.target;
    stop(media);
  }
});