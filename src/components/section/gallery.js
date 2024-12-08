import DogCard from "./SectionComponents/DogCard"
import { useState } from "react"

const Gallerey = () => {
    const [Dogs, setDogs] = useState()
    return (
        <div>
            <DogCard index={0} />
            <DogCard index={1} />
            <DogCard index={2} />
            <DogCard index={3} />
            <DogCard index={4} />
            <DogCard index={5} />
            <DogCard index={6} />
        </div>
    )
}


export default Gallerey