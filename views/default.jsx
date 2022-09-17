const React = require('react');

function Def (html) {
    return (
        <html>
            <head>
                <title>{html.title}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Rest-Rant</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home</a>
                            <a className="nav-item nav-link" href="/places">Places</a>
                            <a className="nav-item nav-link" href="/places/new">Add a place</a>
                        </div>
                    </div>
                </nav>
                {html.children}
            </body>
        </html>
    );
};

module.exports = Def
