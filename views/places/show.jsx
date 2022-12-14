const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
          }, 0)
          let averageRating = Math.round(sumRatings / data.place.comments.length)
          let stars = ''
          for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
          }
          rating = (
            <h3>
              {stars} stars
            </h3>
          )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😃'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
              <br />  
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <div className='row'>
                <div className='col-sm-6'>
                    <img src={data.place.pic} alt={data.place.name} width="90%"/>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className='col-sm-6'>
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                {rating}
                <br/>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                </div>
            </div>
            <hr/>
            <div>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg> Edit
            </a>
            </div>
            <div>  
            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger" value='Delete Comment'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg> Delete
                </button>
            </form>
            </div>
            <div>
                <div>
                <hr/>
                <h2>Comments</h2>
                <hr/>
                </div>
                <div>
                    <form method='POST' action={`/places/${data.place.id}/comment`}>
                        <div className='form-gorup'>
                        <label>Author</label>
                        <input className='form-control col-sm-6 text-center' type='text' id='comments' name='author'/>
                        </div>
                        <div className='form-gorup'>
                        <label>Content</label>
                        <textarea className='form-control col-sm-6' id='content' name='content' rows="4" cols="50"></textarea>
                        </div>
                        <div className='form-gorup'>
                        <label>Rating</label>
                        <select name="stars" id="rating">
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            <option value="2.5">2.5</option>
                            <option value="3">3</option>
                            <option value="3.5">3.5</option>
                            <option value="4">4</option>
                            <option value="4.5">4.5</option>
                            <option value="5">5</option>
                        </select>
                        </div>
                        <div className='form-gorup'>
                        <label>Rant</label>
                        <input type='checkbox' id='rant' name='rant'/>
                        </div>
                        <div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
                {comments}
            </div>
   
          </main>
        </Def>
    )
}

module.exports = show
