import { Footer } from '../../components/Footer';
import { HomePageHeader } from '../../components/HomePageHeader';
import { Navigation } from '../../components/Navigation';
import { H1 } from '../../components/Typography/H1';
import { BrandButton } from '../../components/BrandButton';
import { CircleButton } from '../../components/CircleButton';

//placeholders
import ph1 from '../../assets/Placeholders/1.jpeg';
import ph2 from '../../assets/Placeholders/2.jpeg';
import ph3 from '../../assets/Placeholders/3.jpeg';
import ph4 from '../../assets/Placeholders/4.jpeg';
import ph5 from '../../assets/Placeholders/5.jpeg';
import ph6 from '../../assets/Placeholders/6.jpeg';
import ph7 from '../../assets/Placeholders/7.jpeg';

import classes from './styles.module.scss';

const data = {
  h1: 'The Magic Your\n    Business Needs',
  p1: "We will cast a spell to see the future, to analyze your audience deeply. We will create a masterpiece brand's art for your business that will attract everyone who sees it and mark you as an authority of your industry. ",
  p2: "Every business needs some magics. If you find yourself in a place where you know you can achieve more, have more, and be more. We are the wizards who can help you get there. You might find your business even succeeding but not as extensively as you want it to be.",
  p3: "We will cast a love spell on your leads, so they will crave to buy your services and products. We will do powerful spells. And magically get your business to the next level, and reach your goals. It's all about magics onlyspell",
  h2: "Our Spells",
  p4: "After eras in the field of witchcraft and digital media, we've developed thousands of spells, magics, and methods to take your business to the next level. It doesn't matter what your goal is. If you can think about it - we can create it. Read more about our spells and how we can help you.",
  b1text: "Our Spells",
  h3: "Our partners",
  h4: "Our Portfolio",
  cbtext: "See more",
  h5: "About us",
  p5: "We will cast a spell to see the future, to analyze your audience deeply. We will create a masterpiece brand's art for your business that will attract everyone who sees it and mark you as an authority of your industry. Every business needs some magics. If you find yourself in a place where you know you can achieve more, have more, and be more. We are the wizards who can help you get there. You might find your business even succeeding but not as extensively as you want it to be.",
  b2text: "Read more",
  h6: "Let’s start the\n     magic in your\n     business",
  p6: "Let’s help your business grow. Put your information down here to start the magic.",
  b3text: "Send"
};

const blogItems = [
  { title: 'Food Compliance International Website', asset: ph1, date: '2022-02-01' },
  { title: 'Food Compliance International Website', asset: ph2, date: '2022-02-02' },
  { title: 'Food Compliance International Website', asset: ph3, date: '2022-02-03' },
  { title: 'Food Compliance International Website', asset: ph4, date: '2022-02-04' },
  { title: 'Food Compliance International Website', asset: ph5, date: '2022-02-05' },
  { title: 'Food Compliance International Website', asset: ph6, date: '2022-02-06' },
  { title: 'Food Compliance International Website', asset: ph7, date: '2022-02-07' },
];

export const HomePage = () => (
  <div className={classes.homePageContainer}>
    <Navigation />
    <HomePageHeader />
    <H1>{data.h1}</H1>

    {/* some articles */}
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 20%'
    }}>
      <div>
        <p>{data.p1}</p>
      </div>
      <div>
        <p>{data.p2}</p>
        <p>{data.p3}</p>
      </div>
    </div>

    {/* Our spell - with fancy stars things around */}
    <div>
      <H1>{data.h2}</H1>
      <p>{data.p4}</p>
      <BrandButton text={data.b1text} onClick={() => { }} />
    </div>

    {/* Carousel OWL*/}
    <div>
      <H1>{data.h3}</H1>
      <div>
        OWL CAROUSEL HERE
        https://www.npmjs.com/package/react-owl-carousel
        https://dev.to/chmich/setup-jquery-on-vite-598k
      </div>
    </div>

    {/* Portfolio carousel */}
    <div>
      <div>
        <H1>{data.h4}</H1>
        <CircleButton text={data.cbtext}></CircleButton>
      </div>
      <div>
        OWL CAROUSEL HERE
        https://www.npmjs.com/package/react-owl-carousel
        https://dev.to/chmich/setup-jquery-on-vite-598k
      </div>
    </div>

    {/*About us */}
    <div style={{ display: "flex" }}>
      <div>
        <H1>{data.h5}</H1>
        <p>{data.p5}</p>
        <BrandButton text={data.b2text} onClick={() => { }} />
      </div>
      <div>
        <H1>{data.h6}</H1>
        <p>{data.p6}</p>
        {/* Form here */}
        <BrandButton text={data.b3text} onClick={() => { }} />
      </div>
    </div>

    {/* Blog */}
    <div style={{
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr 1fr",
      "columnGap": "2.34375vw",
    }}>
      {blogItems.map((item, index) => (
        <div key={index}>
          <img src={item.asset} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>

    <Footer />
  </div>
);


