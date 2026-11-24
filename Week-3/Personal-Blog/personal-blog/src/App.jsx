import Navbar from './components/Navbar.jsx'
import BlogList from './components/BlogList.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

const blogs = [
  {
    id: 1,
    category: 'Creativity',
    date: 'May 18, 2025',
    readTime: '6 min read',
    title: 'Making room for a little more wonder',
    excerpt:
      'A few small ways to notice the lovely, ordinary things hiding in the middle of a busy week.',
    body:
      'Wonder rarely announces itself. More often, it arrives when we slow down enough to notice the light moving across a wall, the first warm sip of coffee, or a conversation that takes an unexpected turn. I have started leaving a little unplanned space in my days, and it has become my favorite place to find new ideas.',
    author: 'Maya Bennett',
    initials: 'MB',
    tone: 'lavender',
    featured: true,
  },
  {
    id: 2,
    category: 'Slow living',
    date: 'May 12, 2025',
    readTime: '4 min read',
    title: 'The Sunday reset that actually feels like rest',
    excerpt:
      'A gentle ritual for a calmer week, without turning your day off into another to-do list.',
    body:
      'My reset is less about getting ahead and more about making Monday feel kind. I put on a record, make something simple for dinner, and spend ten minutes getting the small things out of the way. Then I close the notebook. The best part of the ritual is knowing when it is finished.',
    author: 'Maya Bennett',
    initials: 'MB',
    tone: 'peach',
  },
  {
    id: 3,
    category: 'On the page',
    date: 'May 04, 2025',
    readTime: '5 min read',
    title: 'A bookshelf is a map of everywhere you have been',
    excerpt:
      'The books we keep close tell stories about old selves, future selves, and everything between.',
    body:
      'Some books stay with us because of a sentence we underlined; others because of where we were when we read them. Looking along my shelf is a way of remembering all those versions of home. I have stopped organizing by color and started letting the books find each other the way friends do.',
    author: 'Maya Bennett',
    initials: 'MB',
    tone: 'sage',
  },
  {
    id: 4,
    category: 'Creativity',
    date: 'April 26, 2025',
    readTime: '7 min read',
    title: 'Start before the idea is ready',
    excerpt:
      'A note to myself (and maybe to you) about beginning messy and finding the shape along the way.',
    body:
      'Waiting for a perfect idea can look a lot like preparation. The truth is that most of my favorite work began as a half-formed thought and a willingness to stay curious. Make the first version small. Give it room to surprise you. You can always make it better once it exists.',
    author: 'Maya Bennett',
    initials: 'MB',
    tone: 'blue',
  },
  {
    id: 5,
    category: 'Everyday notes',
    date: 'April 17, 2025',
    readTime: '3 min read',
    title: 'A small collection of things that made me smile',
    excerpt:
      'A window-seat breakfast, a very good song on shuffle, and other tiny bright spots from lately.',
    body:
      'A stranger saving me the sunny seat. The smell of rain on a warm sidewalk. An old favorite finding its way back onto my playlist. None of these things changed my life, exactly. They just made the day feel a little more like mine, and that was enough.',
    author: 'Maya Bennett',
    initials: 'MB',
    tone: 'rose',
  },
  {
    id: 6,
    category: 'Slow living',
    date: 'April 09, 2025',
    readTime: '5 min read',
    title: 'Let the morning take the time it takes',
    excerpt:
      'On softer starts, first cups of tea, and resisting the urge to rush into the day.',
    body:
      'I used to think a good morning had to be optimized. Now I try to let it unfold in a gentler order: open a window, water the plants, make tea, and only then check what the day is asking of me. It is not a routine that fixes everything. It simply gives me a softer place to begin.',
    author: 'Maya Bennett',
    initials: 'MB',
    tone: 'yellow',
  },
]

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A little corner of the internet</p>
            <h1>Stories for a life<br />lived <em>curiously.</em></h1>
            <p className="hero-description">
              Notes on creativity, slow living, and finding the good in the everyday.
              Pour something lovely and stay awhile.
            </p>
            <a className="button button-dark" href="#journal">
              Explore the journal <span aria-hidden="true">↘</span>
            </a>
            <div className="hero-byline">
              <div className="avatar avatar-large" aria-hidden="true">MB</div>
              <div>
                <strong>Words by Maya Bennett</strong>
                <span>Writer, daydreamer &amp; tea enthusiast</span>
              </div>
            </div>
          </div>
          <div className="hero-art" aria-label="An illustrated vase with flowers" role="img">
            <div className="sun-disc" />
            <div className="art-sparkle sparkle-one">✳</div>
            <div className="art-sparkle sparkle-two">✳</div>
            <div className="flower flower-left"><i /><i /><i /><i /><b /></div>
            <div className="flower flower-right"><i /><i /><i /><i /><b /></div>
            <div className="flower flower-top"><i /><i /><i /><i /><b /></div>
            <div className="stem stem-left" />
            <div className="stem stem-right" />
            <div className="stem stem-center" />
            <div className="vase"><span /></div>
            <div className="art-caption">GROW AT YOUR OWN PACE</div>
          </div>
          <div className="hero-note">ISSUE NO. 08 <span>·</span> SPRING / SUMMER</div>
        </section>

        <BlogList blogs={blogs} />
      </main>
      <Footer />
    </div>
  )
}

export default App
