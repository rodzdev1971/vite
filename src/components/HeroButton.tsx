import './herobutton.css';

export default function HeroButton(){

    function clickHandler(){
        console.log('click')
      }

    return(
        <div className="hero">
        <h2>Saving Lives, One Drop at a Time</h2>
        <button onClick={clickHandler}>Find Blood Now</button>
        <button onClick={clickHandler}>Register as Donor</button>
      </div>
    )
}