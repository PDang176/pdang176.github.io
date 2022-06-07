import React from 'react'

const Home = () => {
  const welcome = ["Hello", "World!"];

  return (
    <div className="content">
      <div className="hello-world">
        { welcome.map((word, i) =>
          <h1 className="hello-world-word" key={i}>
            { word.split("").map((letter, j) =>
              <span className="hello-world-letter" key={i * 10 + j}>{letter}</span>
            )}
          </h1>
        )}
      </div>
    </div>
  )
}

export default Home