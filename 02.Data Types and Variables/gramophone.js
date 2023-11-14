function gramophone(bandName, albumName, songName) {
    const timePerFullRotation = 2.5;
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = songDuration / timePerFullRotation;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')
