import './App.css';
import React, { useState } from "react";

function MainInfo(props) {
  return (
  <>
  <h2>{props.Title}</h2>
  <p>{props.Text}</p>
  </>
  );
 }

 function BooksInfo(props) {
  return (
  <>
  <ul>
    <li>{props.Books[0]}</li>
    <li>{props.Books[1]}</li>
  </ul>
  </>
  );
 }
 
 function Button(props) {
 


  const btClick = () => {
    console.log(props.btText);
    props.onClickAct(props.btText);
   
  };
  return <button onClick={btClick}>+{props.btText}</button>;
}

 function Display(props){
  
    return <div className="Display">{props.displayText}</div>;
  
}

function App() {

  const incButtonVal = 1;
  const [btnText, setBtText] = useState(incButtonVal);
  const handlerClick=(inc) => {

    setBtText(btnText+inc);
  };

  return (
    <div className="App">
      < MainInfo  />
      < BooksInfo />
      <Button btText={incButtonVal} onClickAct={handlerClick} />
      <Display displayText={btnText} />
    
    </div>
  );
}

MainInfo.defaultProps = { Title: "William Shakespeare",
 Text: "английский поэт и драматург, зачастую считается величайшим англоязычным писателем и одним из лучших драматургов мира[3]. Часто именуется национальным поэтом Англии[4]. Дошедшие до нас работы, включая некоторые, написанные совместно с другими авторами, состоят из 38 пьес, 154 сонетов, 4 поэм и 3 эпитафий. Пьесы Шекспира переведены на все основные языки и ставятся чаще, чем произведения других драматургов"};
 
 BooksInfo.defaultProps={
 Books:["Ромео и Джульетта","Гамлет"]
 
};

export default App;
