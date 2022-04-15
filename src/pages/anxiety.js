import React from "react"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import { Link } from "gatsby"
const Anxiety = () => {
  return (
    <Layout>
      <div className="container-fluid  py-5">
        <Link to={"/anxietyWhat"}>
          <h1
            class="py-5  display-2 border-bottom align-items-center fw-bold text-center toggle"
            style={{
              fontFamily: "Bradley Hand, cursive",
              textAlign: "justify",
              color: "rgb(11, 39, 88)",
            }}
          >
            Anxiety
          </h1>
        </Link>
        <div className="row row-header justify-content-center ">
          <div className="cards card-body ">
            <h3
              className="display-7 fw-bold "
              style={{
                fontFamily: "American Typewriter",
                textAlign: "justify",
                color: "rgb(155, 42, 42)",
              }}
            >
              <h2 style={{ color: "rgb(216, 94, 12)" }}>An open letter:</h2>I
              know it feels like you can't control it, the overwhelming
              thoughts, feelings, and emotions that suffocate you and kill your
              present of all those small moments, moments of joy, happiness,
              relief, a pang of heartache, the comfort of your solitude, the
              sunrise and sunsets, the bloom of the flowers, the storm brewing
              over, everything that makes you feel human. But what if I tell you
              that you could save it, that you could savour your present.
              Because anxiety is nothing but the dizziness of freedom. Listen,
              life is a combination of happiness and pain. Pain is uncomfortable
              and is not something we usually welcome with open arms but it is
              inevitable but you know what is optional? It's suffering. We often
              suffer more from our imagined anxieties about a problem than the
              problem itself. And that is something we have to resolve. See,
              anxiety, on the whole, is not bad for you but too much of anything
              has never proved to be fruitful. Suppose you are in a jungle and
              you see a wolf, so what you would possibly do is get anxious and
              run in the opposite direction for your life, a little anxiety
              sometimes helps you finish your paper or assignments on time, it
              helps you meet the deadline. It pushes you forward in the right
              direction to meet your goals if you have programmed your brain in
              the right way. But many times, when we get anxious about things,
              they don't really pose threat to our safety or push us to achieve
              our set goals. Right? Because it's not just that we are thinking
              of the future, but instead we are trying to control it. So, you
              got to understand that it is not so much about controlling your
              thoughts, because that won't provide the solution you are seeking
              for. But to stand aside and watch them as they come and go and not
              be affected by it. Cause worrying is like carrying tomorrow's load
              with the strength we are given today; it is wanting to move into
              tomorrow ahead of time. But here's the deal it won't empty your
              future of any sorrows or pain or problems, all it would do is
              empty your today of all the possible things that could happen. So
              go easy on yourself. Know that it's okay, that you are strong to
              deal with what life throws at you. It's all about the perspective
              that gives you the strength to move forward through painful times,
              so broaden it. Next time, you are anxious focus on anything around
              you that is square, breathe in for 4 seconds, hold it in for 4
              seconds, breathe out for 4 seconds and then hold again. Repeat it
              till you calm down. Talk it out, instead of dwelling on it. Live
              in the moment. Live in the breath.
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Anxiety
