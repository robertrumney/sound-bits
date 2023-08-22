# SoundBits

A lightweight JavaScript library for playing sound effects in online games. Get rid of third-party complexities and embrace the simplicity of SoundBits!

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Enhancements](#enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Load & Play**: Easily load and play sound effects.
- **Loop Support**: Loop your sound effects seamlessly.
- **Stop Playback**: Pause and reset sound instances.

## Installation

1. Clone this repository or download the `SoundBits.js` file.
2. Include `SoundBits.js` in your project.

"<script src="path_to_SoundBits.js"></script>"

## Usage

### Loading a sound:

```javascript SoundBits.load('shot', 'path_to_your_sound_file.mp3');```

### Playing a sound:

```javascript const shotSound = SoundBits.play('shot');```

### Stopping a sound:

```javascript SoundBits.stop(shotSound);```

## Enhancements

- Adjusting volume, fading in/out, and more are on the roadmap!
- If you have more features or improvements in mind, feel free to [contribute](#contributing).

## Contributing

1. Fork the repository.
2. Create your feature branch ("git checkout -b feature/AmazingFeature").
3. Commit your changes ("git commit -m 'Add some AmazingFeature'").
4. Push to the branch ("git push origin feature/AmazingFeature").
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
