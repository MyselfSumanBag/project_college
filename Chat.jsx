import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import ReactMarkdown from "react-markdown";


const Chat = () => {
      const [question, setQuestion] = useState("");
			const [answer, setAnswer] = useState("");
			const [generatingAnswer, setGeneratingAnswer] = useState(false);

			async function generateAnswer(e) {
				setGeneratingAnswer(true);
				e.preventDefault();
				setAnswer("Loading your answer... \n It might take upto 10 seconds");
				try {
					const response = await axios({
						url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD9NMujFcrPnAH0Pdch0VV5o77xWykn6Rk`,
						method: "post",
						data: {
							contents: [{ parts: [{ text: question }] }],
						},
					});

					setAnswer(
						response["data"]["candidates"][0]["content"]["parts"][0]["text"]
					);
				} catch (error) {
					console.log(error);
					setAnswer("Sorry - Something went wrong. Please try again!");
				}

				setGeneratingAnswer(false);
			}

  return (
		<div className=" h-auto p-3 w-screen bg-blue-300 text-black">
			<form
				onSubmit={generateAnswer}
				className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
			>
				<a href="https://github.com/Vishesh-Pandey/chat-ai" target="_blank">
					<h1 className="text-3xl text-center">Chat AI</h1>
				</a>
				<textarea
					required
					className="border rounded w-11/12 my-2 min-h-fit p-3"
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					placeholder="Ask anything"
				></textarea>
				<button
					type="submit"
					className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
					disabled={generatingAnswer}
				>
					Generate answer
				</button>
			</form>
			<div className="w-full md:w-2/3 m-auto text-center rounded  my-1">
				<ReactMarkdown className="p-3">{answer}</ReactMarkdown>
			</div>
		</div>
	);
}

export default Chat