import ReactDom from 'react-dom'

function App() {

    const style={
        backgroundColor:"blue",
        color:"white",
       
    };

    const buttonText="Submit";
    const labelText="Enter Name";
    return (
        <div>
            <h3>Form</h3>
            <label htmlFor="name" class="label-class">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <hr/>
            <ul className="list">
                <h3>Social Networks</h3>
                <li>Facebook</li>
                <li>Slack</li>
                <li>Twitter</li>
            </ul>
            <button style={style}>{buttonText}</button>

            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, odit reprehenderit. Ex, nam repellendus! Fuga laudantium adipisci blanditiis corporis libero.
            </p>
        </div>
 
 );
    
}

    ReactDom.render(<App />,document.querySelector('#root'))


