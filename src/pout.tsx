import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';


function Step1({ callbackFn, shouldSubmit }) {
  const inputEl = useRef(null);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.onSubmit(event => {
        const { a, b } = event.target;
        callbackFn(a, b);
      });
    }
  });

  useEffect(() => {
    if (inputEl.current && shouldSubmit) {
      inputEl.current.submit();
    }
  }, [shouldSubmit]);

  return (
      <form ref={inputEl}>
        <input type="text" name='a'/>
        <input type="text" name='b'/>
      </form>
  )
}

function A() {
  const pouet = (playerName, characterName) => {
      useDispatch({ type: 'PLAYERNAME', name: playerName });
      useDispatch({ type: 'CHARNAME', name: characterName });
  };
  // step 1 -> shouldSubmit

  return  (<div>
    <Step1 callbackFn={pouet} shouldSubmit={false} />
    <Step2 />
    <Step3 />
    {
      end ? <BtnEnd /> : <BtnNext />
    }
  </div>);
}
