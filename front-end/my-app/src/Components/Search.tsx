/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import DogCard from "./Cards"
import BREED_LIST from "../const";
import { useNavigate } from "react-router-dom";
import { Button, Segment, Input } from "semantic-ui-react";

function Search() {
  
  const [ dogName, setDogName ]= useState("");
  const [filteredList, setFilteredList] = useState<String[]>([]);
  const [ imageUrlList, setImageUrlList] = useState<String[]>([]);
  const navigate = useNavigate();

  function random(obj : any){
    return Math.floor(Math.random() * obj.length + 1)
  }
  
async function search() {
  const curDogs: string[] = await Promise.all(filteredList.map(async (ele) => {
    let res:any = await axios.get(`https://dog.ceo/api/breed/${ele}/images`)
    let obj = res.data.message
    return obj[0]
}))
  setImageUrlList(curDogs)
}

async function shuffle() {
  const curDogs: string[] = await Promise.all(filteredList.map(async (ele) => {
    let res:any = await axios.get(`https://dog.ceo/api/breed/${ele}/images`)
    let obj = res.data.message
    return obj[random(obj)]
}))
  setImageUrlList(curDogs)
}

  useEffect(() => {
    if (dogName === "") {
      setFilteredList([])
      setImageUrlList([])
    } else {
      setFilteredList(BREED_LIST.filter((names) => names.startsWith(dogName)))
    }
  }, [dogName]); 

  function handleSubmit() {
    navigate('/')
  }

  return (
      <div className="search-bar">
        <h1>🐶 🐶 🐶 Dog Search 🐶 🐶 🐶</h1> 
        <Segment>
          <Input
            placeholder="Search Dog Breed"
            type="text"
            id="dog-name"
            name="dog-name"
            onChange={(e) => setDogName(e.target.value)}
          />
        </Segment>
          <Button.Group size='medium' className="search-button">
            <Button onClick={search}>Search</Button>
            <Button.Or />
            <Button onClick={shuffle}>Shuffle</Button>
            <Button.Or />
            <Button onClick={handleSubmit}>Home</Button>
          </Button.Group>
      
      
      <div className="filtered-list">
        {
          filteredList.map( (ele) => {
            return <p>{ele}</p>
          })
        }
      </div>

      <br/>
      <br/>

      <div className="image" key="image">
        {
          imageUrlList.map( (ele, i) => {
            return (
              <div>
                <h2>{"Breed: " + filteredList[i].toUpperCase()}</h2>
                <DogCard key="" href="" imageLink={ele}/> 
              </div>)
          })
        }
      </div>
      <footer>
        MSA Phase 3 | Front-end | tsoukent97@outlook.com | <a href="https://github.com/tsoukent97" target="blank">Github</a> 
      </footer>
     </div>
  );
}

export default Search;

