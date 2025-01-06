import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import styled from 'styled-components'

const title = 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3) Hardcover'
const author = 'Rebecca Yarros'
const img = './images/book-1.jpg'

const AuthorStyle = styled.h4`
  margin-top: 0.5rem;
  color: #617d98;
  font-size: 0.75rem;
`

const Books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    author: 'Rebecca Yarros',
    title: 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3) Hardcover',
    img: './images/book-2.jpg',
  },
  {
    author: 'Atomic Habits',
    title: 'Atomic Habits',
    img: './images/book-3.jpg',
  },
]

function BookList() {
  return (
    <>
      <section className="booklist">
        {Books.map((book) => {
          return <Book key={book.id} {...book} />
        })}
      </section>
    </>
  )
}

export const Book = (props) => {
  const { img, title, author } = props
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <AuthorStyle>{author}</AuthorStyle>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList title={title} author={author} img={img} />)
