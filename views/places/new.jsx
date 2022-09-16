const React = require('react')
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a new place</h1>
                <form method='POST' action='/places'>
                    <div className='form-gorup'>
                        <label>Place Name</label>
                        <input className='form-control' id='name' name='name'required/>
                    </div>
                    <div className='form-gorup'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' id="pic" name="pic" />
                    </div>
                    <div className='form-gorup'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' id="city" name="pic" />
                    </div>
                    <div className='form-gorup'>
                        <label htmlFor="pic">State</label>
                        <input className='form-control' id="state" name="state" />
                    </div>
                    <div className='form-gorup'>
                        <label htmlFor="pic">Cuisines</label>
                        <input className='form-control' id="cuisines" name="cuisines" required/>
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form