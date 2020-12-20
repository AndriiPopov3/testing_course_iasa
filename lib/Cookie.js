function Cookie() {
}
Cookie.prototype.accept = async function(accept) {
    accept.click();
};

Cookie.prototype.here = async function(here) {
    here.click();
}
// Cookie.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Cookie.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Cookie.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };

module.exports = Cookie;
