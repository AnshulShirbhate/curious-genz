import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e){
    if(e.target.name == "name"){
      setName(e.target.value);
    } else if(e.target.name == "email"){
      setEmail(e.target.value);
    } else if(e.target.name == "subject"){
      setSubject(e.target.value);
    } else if(e.target.name == "message"){
      setMessage(e.target.value);
    }
  }

  
function handleSubmit(e){
  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Error sending message!");
      console.error("Error:", error);
    }
  }
  
  const data = { name, email, subject, message};
  postJSON(data);
  e.preventDefault();
}

  return (
    <>
      <ToastContainer />
      <div>
        <section class="bg-white">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Me</h2>
            <p class="mb-4 lg:mb-8 font-light text-center sm:text-xl">If you got a query? or just want to get something to my attention.</p>
            <form onSubmit={handleSubmit} class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium">Name</label>
                <input name="name" value={name} onChange={handleChange} type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium">Email</label>
                <input name="email" value={email} onChange={handleChange} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium">Subject</label>
                <input name="subject" value={subject} onChange={handleChange} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium">Your message</label>
                <textarea name="message" value={message} onChange={handleChange} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send message</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact