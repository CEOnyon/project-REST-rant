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
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Rest-Rant</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                         </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="/places">Places</a>
                            <a class="nav-item nav-link" href="/places/new">Add a place</a>
                        </div>
                    </div>
                </nav>
                {html.children}
            </body>
        </html>
    );
};

module.exports = Def
