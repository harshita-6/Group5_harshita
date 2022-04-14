import React from "react"
import Layout from "../components/Layout/layout"
import Image from "../components/Images/images"
import { Link } from "gatsby"

const Jealousy = () => {
  return (
    <Layout>
      <div className="container-fluid  py-5">
        <Link to="/jealousy">
          <h1
            class="py-5  display-2 border-bottom align-items-center fw-bold text-center  "
            style={{
              fontFamily: "Bradley Hand, cursive",
              textAlign: "justify",
              color: "rgb(11, 39, 88)",
            }}
          >
            Jealousy
          </h1>
        </Link>
        <div className="row row-header justify-content-center ">
          <div className="row col-12 py-5">
            <div className="col-md col-sm-6 ">
              <Image
                className="d-block mx-lg-auto img-fluid align-self-center"
                filename="jeas.jpg"
                alt="1"
              />
            </div>
            <div className=" col-md col-sm-6 ">
              <Image
                className="d-block mx-lg-auto img-fluid align-self-center"
                style={{
                  transform:
                    "translate(50px, 100px), rotate(20deg), rotate(-20deg)",
                }}
                filename="jea.jpg"
                alt="1"
              />
            </div>
          </div>
          <div className="cards card-body">
            <h3
              className="display-7 fw-bold"
              style={{
                fontFamily: "American Typewriter",
                textAlign: "justify",
                color: "rgb(155, 42, 42)",
              }}
            >
              <h2 style={{ color: "rgb(216, 94, 12)" }}>What is it?:</h2>

              <h3 className="display-7 fw-bold ">
                Jealousy generally refers to the thoughts or feelings of
                insecurity, fear, and concern over a relative lack of
                possessions or safety. It is a typical experience in human
                relationships, and it has been observed in infants as young as
                five months. Some researchers claim that jealousy is seen in all
                cultures and is a universal trait. Jealousy can either be
                suspicious or reactive, and it is often reinforced as a series
                of particularly strong emotions and constructed as a universal
                human experience. Psychologists have proposed several models to
                study the processes underlying jealousy and have identified
                factors that result in jealousy. Sociologists have demonstrated
                that cultural beliefs and values play an important role in
                determining what triggers jealousy and what constitutes socially
                acceptable expressions of jealousy. Biologists have identified
                factors that may unconsciously influence the expression of
                jealousy like: • Anger towards a person or a situation that is
                interfering with something you care about. • Resenting a friend
                or a partner when they can’t spend enough time with you(even
                when a person realizes that they have important affairs to
                attend to). • Difficulty feeling happy for a co-worker when they
                receive something you wanted or desired. • Feelings of dislike
                toward a new person in a loved one’s life that are hard to
                explain. For example, a father might have feelings of hostility
                that stem from jealousy toward his daughter’s fiancé even if the
                partner she’s chosen is a healthy one. • Deep sadness and a hint
                of anger when thinking about a partner/friend/family (usually in
                long-term relation) with other people surrounding them. It is
                normal to feel some jealousy, but it can help to have support
                when working through strong feelings of jealousy, especially if
                these are rooted in deeper feelings related to self-esteem,
                trust, or control. There are different kind of jealousies. Some
                common types would be: Jealousy in Relationships: Mild jealousy
                can be healthy in relationships. It reiterates the fact that an
                individual cares about his or her partner, values them and does
                not want to lose them. Jealousy becomes toxic for relationships,
                however, if left unchecked. Trust is a key component of any
                healthy, successful relationship. Jealousy breeds suspicion,
                doubt, and mistrust, which can snowball into pretty intense
                emotions and behaviours. What began as a partnership of equals
                can degenerate into an unhappy relationship of guard and jailer.
                This type of jealousy stems from the fear of being replaced by
                someone else in a valued relationship. Jealousy related to power
                and status: This type of jealousy often occurs at a workplace or
                in school/colleges where the other person achieves the things
                you also want before you, may it be then promotion or better
                grades or higher rank in a competition. Pathological jealousy:
                It is a psychological disorder in which a person is preoccupied
                with the thought that their spouse or sexual partner is being
                unfaithful without having any real proof, along with socially
                unacceptable or abnormal behaviour related to these thoughts.
                The most common cited forms of psychopathology in morbid
                jealousy are delusions and obsessions. It is considered a
                subtype of delusional disorder. Feelings of jealousy often come
                from extended periods of poor communication and low self-esteem.
                People with poor boundaries might experience jealousy, and
                witnessing parents with poor boundaries usually reinforces
                maladaptive ways of coping. Because loneliness and other
                symptoms can manifest in jealousy, those with mental health
                issues can also be more prone. Children with anxious attachment
                styles who don’t have great emotional regulation skills
                sometimes grow up to be jealous of others; however, jealousy can
                also show up in the wake of a partner spending time with someone
                who feels like a threat, or situations where there is a new
                dynamic, causing trust issues. When jealous feelings are
                long-lasting, pervasive, or severe, it may indicate that the
                cause is an underlying mental health issue. Some mental health
                issues and symptoms associated with jealousy include:
                <ul>• Depression</ul>
                <ul>• Anxiety</ul>
                <ul>• PTSD</ul>
                <ul>• OCD</ul>
                <ul>• Attachment issues</ul>
                <ul>• Paranoia</ul>
                <ul>• Schizophrenia</ul>
                <ul>• Borderline Personality Disorder (BPD)</ul>
                Jealousy can cause many complications. For example:
                <ul>• Negative impact on the relationship</ul>
                <ul>• Break up or divorce</ul>
                <ul>• Panic attacks</ul>
                <ul>• Headaches</ul>
                <ul>• Chest pain</ul>
                <ul>• High blood pressure</ul>
                <ul>• Stomach aches</ul>
                <ul>• Weight changes</ul>
                <ul>• Insomnia</ul>
                To cope up with the jealousy. Keep in mind to-
                <ul>1. Be open about your feelings</ul>
                <ul>2. Take control of your fears</ul>
                <ul>3. Discuss and set expectations</ul>
                <ul>4. Engage in gratitude and mindfulness</ul>
                <ul>5. Talk it out with a therapist</ul>
                It’s never too late!!!
              </h3>
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Jealousy
