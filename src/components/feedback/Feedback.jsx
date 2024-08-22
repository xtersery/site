import {React, useState} from 'react'
import './Feedback.css'
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps'
import emailjs from 'emailjs-com'


const Feedback = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [msg, setMsg] = useState("");

  const changeName = (event) => {
    setValue(event.target.value);
  }
  const changeEmail = (event) => {
    setEmail(event.target.value);
  }
  const changeTopic = (event) => {
    setTopic(event.target.value);
  }
  const changeMsg = (event) => {
    setMsg(event.target.value);
  }

  const handleSubmit = (event) => {
    window.alert('Отправлено: ' + value);
    event.preventDefault();

    const template = {
      from_name: value,
      from_email: email,
      topic: topic,
      message: msg
    };

    emailjs.send('service_f46w7yr', 'template_tfaqx9u', template, 'vIHu4UI6ndXQUBQuu')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully');
    }, (error) => {
      console.error('FAILED...', error);
      alert('Failed to send email.');
    });
  }


  return (
    <div className='fd-box'>
      <div className="left-side">
        <div className="my-map">
          <YMaps>
            <Map
              defaultState={{
                center: [48.478826,135.076301],
                zoom: 17,
                controls: ["zoomControl", "fullscreenControl"],
                restrictMapArea: [48.47882, 48.47883][135.07630, 135.07631]
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
              width="600px"
              height="500px"
            >
              <Placemark
              defaultGeometry={[48.478826,135.076301]}
              />
            </Map>
          </YMaps>
        </div>
      </div>
      <div className="right-side">
        <h1 className="stroke-text">Остались вопросы?</h1>
        <div className="borderline"></div>
        <div className="text-field">
          <label id='1'>Имя</label>
          <input  id='1' type="text" className="name" value={value} onChange={changeName}></input>
        </div>
        <div className="text-field">
          <label id='2'>Email</label>
          <input id='2' type="text" className="email" value={email} onChange={changeEmail}></input>
        </div>
        <div className="text-field">
          <label id='3'>Тема</label>
          <input id='3' type="text" className="topic" value={topic} onChange={changeTopic}></input>
        </div>
        <div className="text-field">
          <label id='4'>Сообщение</label>
          <textarea id='4' type="text" className="msg" value={msg} onChange={changeMsg}></textarea>
        </div>
        <div className="button">
          <button type="submit" onClick={handleSubmit}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default Feedback
