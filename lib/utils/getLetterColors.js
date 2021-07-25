export const getLetterColors = (phrase, value) => (
    phrase.map((letter, index)=> {
        if(!value[index]){
        return(
          <span className="gray" key={index}>{letter}</span>
        )}
        if (index === (value.length - 1) && value[index] === ' '){
          return (
            <span key={index} className={letter === value[index] ?  `green activeLetterSpace` : `red activeLetterSpace`}>
              {value[index]}
            </span>
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
            <span key={index} className={letter === value[index] ? `green activeLetter` : `red activeLetter`}>
                {letter}
            </span>
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
);