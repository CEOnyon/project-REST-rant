const React = require('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <div>
                        <img style={{ width: 1000, height: 1000 }} src='/images/error-dog.jpg' alt='funny dog'/>
                    </div>
                    <div>
                        Photo by <a href='https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Charles Deluvio</a> on <a href='https://unsplash.com/s/photos/funny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    );
};


module.exports = error404

  