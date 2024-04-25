import Also from "../Also/Also"

const Places = () => {
    
    const places = ['Bath', 'Bristol', 'Cardiff'];
    var R = Math.round(Math.random()*places.length);
    console.log(R);

    return(
    <>
        <h1>RANDOM CITY GENERATOR</h1>
        <h3>Possible Places</h3>
        <ul>
            {places.map((place, index) => {
                return <li key="index">{index}: The wonderful city of {place}</li>
            })}
        </ul>
        <p>Today we're in {(R <= places.length-1) ? places[R]: "Nowhere"}</p>

        
    </>
    )
}

export default Places