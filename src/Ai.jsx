import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Ai() {
    const key = 'AIzaSyBFeLJqJYk28rjKzERkeqLOUVyZEmro0iE';

    let [aiT,setAiT] = useState('')





function inPutText(e){
    e.preventDefault()
    let aiText = e.target.aiText.value
    console.log(aiText);

    async function generateContent() {
        const genAI = new GoogleGenerativeAI(`${key}`);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
        const prompt = `${aiText} in bangla`;
      
        try {
          const result = await model.generateContent(prompt);
          setAiT(result.response.text());
        } catch (error) {
          console.error("Error generating content:", error);
        }
      }


    generateContent();
    
}

  return (
    <div>
      <p>{aiT}</p>
      <form onSubmit={inPutText}>
      <input name='aiText' type="text" />
      <input className='btn' type="submit" value="submit" />
      </form>
    </div>
  )
}
