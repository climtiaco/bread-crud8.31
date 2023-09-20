const React = require('react')
const Default = require('./layouts/default')


//So the "breads" defined in the argument of the function is pulling from the breads_controller.js file. That variable connects the breadData
// Then how we're adding data to the page is we're creating html elements to incase all of our data that we're pulling from the other files.
function Index({breads, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (<li key={index}>
                            <a href={`/breads/${index}`}>
                                {bread.name}
                                </a>
                            </li>)
                            
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>

        </Default>
    )
}

module.exports = Index