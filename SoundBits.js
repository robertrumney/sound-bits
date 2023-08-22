(function(window) {
  const SoundBits = {};

  // This will hold all our sound instances
  SoundBits.sounds = {};

  /**
   * Load a sound.
   * @param {string} id - A unique identifier for the sound.
   * @param {string} url - The URL of the sound file.
   */
  SoundBits.load = function(id, url) {
    const audio = new Audio(url);
    this.sounds[id] = audio;
  };

  /**
   * Play a loaded sound.
   * @param {string} id - The identifier of the sound.
   * @param {boolean} loop - Whether to loop the sound or not.
   */
  SoundBits.play = function(id, loop = false) {
    if (this.sounds[id]) {
      const sound = this.sounds[id].cloneNode();
      sound.loop = loop;
      sound.play();
      return sound;
    } else {
      console.warn(`Sound "${id}" not found!`);
    }
  };

  /**
   * Stop a playing sound.
   * @param {Audio} soundInstance - The instance returned from SoundBits.play.
   */
  SoundBits.stop = function(soundInstance) {
    if (soundInstance) {
      soundInstance.pause();
      soundInstance.currentTime = 0;
    }
  };

  window.SoundBits = SoundBits;

})(window);
