import React from "react"
import Layout from "../components/Layout/layout"
import Image from "../components/Images/images"
import { Link } from "gatsby"
const Struggling = () => {
  return (
    <Layout>
      <div className="container-fluid  py-5">
        <Link to={"/struggleWhat"}>
          <h1
            class="py-5  display-2 border-bottom align-items-center fw-bold text-center toggle"
            style={{
              fontFamily: "Bradley Hand, cursive",
              textAlign: "justify",
              color: "rgb(11, 39, 88)",
            }}
          >
            STRUGGLING WITH SEXUAL ORIENTATION
          </h1>
        </Link>
        <div className="row row-header justify-content-center ">
          <div className="row col-12 py-5">
            <div className="col-md col-sm-3 ">
              <Image
                className="d-block mx-lg-auto img-fluid align-self-center"
                filename="swso.png"
                alt="1"
              />
            </div>
            <div className=" col-md col-sm-3 ">
              <Image
                className="d-block mx-lg-auto img-fluid align-self-center"
                style={{
                  transform:
                    "translate(50px, 100px), rotate(20deg), rotate(-20deg)",
                }}
                filename="swso2.png"
                alt="1"
              />
            </div>
            <div className=" col-md col-sm-3 ">
              <Image
                className="d-block mx-lg-auto img-fluid align-self-center"
                style={{
                  transform:
                    "translate(50px, 100px), rotate(20deg), rotate(-20deg)",
                }}
                filename="swso3.png"
                alt="1"
              />
            </div>
          </div>
          <div
            className="row  row-header display-7  fw-bold align-items-center py-5"
            style={{
              fontFamily: "American Typewriter",
              textAlign: "justify",
            }}
          >
            <h2>
              {" "}
              <h2 style={{ color: "rgb(216, 94, 12)" }}>More on the topic:</h2>
              <ul>
                <a href="https://www.youtube.com/watch?v=sCZiXfaa9ro">
                  https://www.youtube.com/watch?v=sCZiXfaa9ro
                </a>
              </ul>
              <ul>
                <a href="https://www.youtube.com/watch?v=f55N3O4PPMc">
                  https://www.youtube.com/watch?v=f55N3O4PPMc
                </a>
              </ul>
              <ul>
                <a href="https://www.youtube.com/watch?v=4Khn_z9FPmU">
                  https://www.youtube.com/watch?v=4Khn_z9FPmU
                </a>
              </ul>
            </h2>
          </div>

          <div className="cards card-body ">
            <h3
              className="display-7 fw-bold "
              style={{
                fontFamily: "American Typewriter",
                textAlign: "justify",
                color: "rgb(155, 42, 42)",
              }}
            >
              <h2 style={{ color: "rgb(216, 94, 12)" }}>An open letter:</h2>
              In a world tied up by expectations, we often create barriers and
              restrictions for ourselves that stop us from being comfortable
              with the person that we have always meant to be. I am very well
              aware of the fact that in today's society, sexuality is seen as
              something taboo to talk about on all ends of the spectrum. But I
              want you to not forget, that we now live in a time where we have
              freedom and the right to be who we want to be. Only by speaking
              out can we create lasting change, and that change begins with
              coming out. I know it's not that easy to come out of our shells
              and closets that we have built around us to keep ourselves safe.
              But the true ugliness of the closet is its subtlety, it eats away
              at your soul bit by bit and you fail to realize it every time it
              happens so it's important to understand that by being in there
              it's a suicide of the soul, identity, and meaning of you. The
              first step is understanding and accepting yourself for who you are
              and knowing that your sexual orientation isn't a choice and can't
              be changed. Please do not treat it like it's a problem or there's
              something wrong with you because in simple and clear words it's
              not. It's your gift and when you embrace it, it is the end; the
              end of shame, fear, and oppression. So, by coming out you leave
              the darkness behind and begin a life of honesty, authenticity, and
              freedom. And that's beautiful. Beautiful to say, no more shame,
              denial, or secrecy. I know there are doubts in your head that what
              if your friends or family doesn't accept you and what if you find
              yourself isolated all over again. If that happens it's important
              to realize that they were never meant for you and you deserve so
              much better because a friend is the one that knows you as you are,
              understands where you have been, accepts what you have become, and
              still gently allows you to grow. When it comes down to family, it
              might take some time for them to adjust, but they'll always love
              you. After all, a family is made of love, tears, laughter, and all
              those years spent making it stronger. In the end, remember you
              have a choice, you mustn't feel pressured into doing something you
              are not comfortable with. When the time is right, you'll know.
              There will be challenges for sure. We are all on our own paths in
              life, and the choices we make and the directions we take define
              what lies ahead of us. Maybe taking that leap of faith in coming
              out may just turn out to be the best thing you've ever done and
              you'll find that you are not alone. So go forth in the knowledge
              that you are winning at life.
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Struggling
