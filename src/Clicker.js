
export default function Clicker({incrementClicks}) {

    return <div className="clicker">
        <img src="eevee.png" alt="Click me!" onClick={incrementClicks}/>
    </div>
}