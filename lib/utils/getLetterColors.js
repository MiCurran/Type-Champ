export const getLetterColors = (phrase, value) => {
  if (value.length > 0 ) {
    return (
    phrase.map((letter, index)=> {
        if(!value[index]){
        return(
          <span className="gray" key={index}>{letter}</span>
        )}
        if (index === (value.length - 1) && value[index] === ' '){
          return (
            <>
            <span key={index} className={letter === value[index] ?  `green activeLetterSpace` : `red activeLetterSpace`}>
              {value[index]}
            </span>
            <div className='cursor'/>
            </>
          )
        }
        if (index === (value.length - 1) && value[index - 1] === ' '){
          return (
            <span key={index} className={letter === value[index] ? `green activeLetterAfterSpace` : `red activeLetterAfterSpace`}>
              {value[index]}
            </span>
          )
        }
        if (index === (value.length - 1)){
          return (
            <>
            <span key={index} className={letter === value[index] ? `green activeLetter` : `red activeLetter`}>
                {letter}
            </span>
            <div className='cursor'/>
            </>
          )
        } 
        else {
          return (
            <span key={index} className={letter === value[index] ? "green" : "red"}>
            {letter}
          </span>
          )
        }
      })
    )
  } else {
    return (
      <>
      <div className='cursor'/>
      {phrase.map((letter, index)=> {
        return(
      <span className="gray" key={index}>{letter}</span>
        )
      })}
    </>
    )
  }
    };
