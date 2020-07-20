import React from "react"
import Header from "../components/header"

const about = () => {
  return (
    <div>
      <Header siteTitle="About Page" />
      <div style={{ width: "80%", margin: "auto" }}>
        <h2>Version 1.0.0</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aliquam ratione in ipsam quod maiores commodi perspiciatis excepturi
          optio. Ab voluptates commodi id cumque temporibus voluptatibus
          laudantium, labore aliquam delectus excepturi illo vero? Cumque sint
          aspernatur, tempore consectetur veniam explicabo.
          <br />
        </p>
      </div>
    </div>
  )
}

export default about
