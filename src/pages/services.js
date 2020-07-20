import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

const ServicesPage = () => {
  return (
    <div>
      <Header siteTitle="Services Page" />
      <div style={{ width: "40%", marginLeft: "140px" }}>
        <h2>Some random services :-</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aliquam ratione in ipsam quod maiores commodi perspiciatis excepturi
          optio. Ab voluptates commodi id cumque temporibus voluptatibus
          laudantium, labore aliquam delectus excepturi illo vero? Cumque sint
          aspernatur, tempore consectetur veniam explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          enim similique iste nemo labore distinctio facere? Facere nostrum
          animi beatae possimus nobis voluptates aspernatur ex iure quae fuga
          libero maiores odit sapiente deserunt magni ullam vitae, atque labore
          corrupti nisi.
        </p>
        <br />
        <Link to="/">Go to Home page</Link>
      </div>
    </div>
  )
}

export default ServicesPage
