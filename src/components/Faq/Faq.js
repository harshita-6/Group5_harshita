import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "What is mental health?",
    content: `Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.`,
  },
  {
    title: "Can you prevent mental health problems?",
    content: `There's no sure way to prevent mental illness. However, if you have a mental illness, taking steps to control stress, to increase your resilience and to boost low self-esteem may help keep your symptoms under control.`,
  },
  {
    title: "I feel quite low sometimes. Should I see a therapist?",
    content: `One of the most important things to do if you’re feeling down is to open up. Most people feel more comfortable confiding in a close friend or family member in the first instance. Often simply talking about it helps. If the problem continues and begins to interfere with everyday life, you can go and seek professional help.`,
  },
]

const FAQ = () => {
  return (
    <section className="faq-section">
      <h2 class="pb-2 border-bottom text-center fw-bold">FAQ</h2>
      <div className="container py-5">
        {Item.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
