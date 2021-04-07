import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title)
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Todo' value={title}
                onChange={(e) => setTitle(e.target.value)} required
            />
            <input type="submit" value="add todo" />
        </form>
    )
}

export default NewBookForm