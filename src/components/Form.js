import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState' ;

const Form = () => {
    const { sendMessage } = useContext(GlobalContext);
    
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = e => {
        e.preventDefault();
        const newMessage = {
            id: Math.floor(Math.random() * 10000000),
            name,
            mail,
            message
        }
        sendMessage(newMessage);
    }
        return (
    <div className="container-contact100">
		<div className="wrap-contact100">
			<form  onSubmit={onSubmit} className="contact100-form validate-form">
				<span className="contact100-form-title">
					Send Us A Message
				</span>

				<div className="wrap-input100 validate-input" data-validate="Please enter your name">
					<input value={name} onChange={(e)=> setName(e.target.value)} className="input100" type="text" name="name" placeholder="Full Name" />
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Please enter your email: e@a.x">
					<input value={mail} onChange={(e)=> setMail(e.target.value)} className="input100" type="text" name="email" placeholder="E-mail" />
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Please enter your message">
					<textarea value={message} onChange={(e)=> setMessage(e.target.value)} className="input100" name="message" placeholder="Your Message"></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
					<button className="contact100-form-btn">
						<span>
							<i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
							Send
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
    )
}

export default Form
