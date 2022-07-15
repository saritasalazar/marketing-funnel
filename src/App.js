import Logo from './owlogo.png';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={Logo} />
      </header>

      <main>
        <h3>MY WELLNESS JOURNEY</h3>
        <p>
          I have been in your shoes.  I was so tired of being told <i>“there is nothing wrong with you”</i> for years that I embarked on a life- changing mission to discover the truth about the root cause for my chronic symptoms.
          I am a Nurse Practitioner who specializes in Functional Medicine and Integrative Endocrinology who helps people with chronic illness transform their lives by getting to the ROOT CAUSE of their symptoms.
          This was me for years despite trying everything.
        </p>
        <ul>
          <li>Chronic fatigue</li>
          <li>Chronic fatigue</li>
          <li>Abnormal weight gain</li>
          <li>Severe gastro-esophageal reflux</li>
          <li>Chronic constipation</li>
          <li>Diffuse muscle pain</li>
          <li>Chronic anxiety/mild depression</li>
        </ul>
        <p>
          For years I was told by health care practitioners that there was “nothing wrong with you” however I knew that something was missing.  It just did not add up despite having all of the symptoms I was told “your labs are normal” or you are “just stressed” and made to feel like it was all in my head. I was prescribed medication after medication, often making me feel worse.
          After living like this for years, I was introduced to Functional Medicine which completely changed my life and my practice.
        </p>
        <p>
          For a limited time, I am offering my Introductory Consultation for $99 (normal $325) to new patients affected by or struggling with unexplained chronic symptoms and no answers.
        </p>
        <p>
          Claim this voucher today for your Functional Medicine Intro Consult that includes:
        </p>
        <p>An Introductory Consultation with me (30 – 45 minutes virtual) where you can share your current symptoms and concerns and we can discuss how a Functional Medicine approach may help you.
        </p>
        <FormControl>
          <TextField id="filled-basic" label="Name" variant="filled" />
          <TextField id="filled-basic" label="Email" variant="filled" />
          <TextField id="filled-basic" label="Phone Number" variant="filled" />
          <Button variant="contained">CLAIM MY VOUCHER</Button>
        </FormControl>
      </main>
    </div>
  );
}

export default App;
