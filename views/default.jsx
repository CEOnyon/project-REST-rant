const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <tit>Title</tit>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
