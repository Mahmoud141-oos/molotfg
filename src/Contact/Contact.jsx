import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="contact-page">
                <h1>Contact Me</h1>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact