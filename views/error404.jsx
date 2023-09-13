const React = require('react')
const Default = require('./layouts/Default')

function Error404() {
    return (
        <Default>
        <h1>You're officially LOST</h1>
        <h2>Click "BreadCRUD" button to go back</h2>
        <iframe src="https://giphy.com/embed/Ju7l5y9osyymQ" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ">via GIPHY</a></p>
        </Default>
        )
    }

    module.exports = Error404