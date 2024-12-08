const response = await fetch ('https://dog.ceo/api/breeds/image/random/7')
const Data = await response.json()
console.log(Data)

const DogCard = ({index}) => {
    return (
        <div className="DogCard-conatiner"> 
            <img className="DogCard" src={Data.message[index]} alt='DogImg'></img>
        </div>
    )
}

export default DogCard