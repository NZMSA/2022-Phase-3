function DogCard (prop:any) {

    return (
        <div>
            <img className="image-container" src={prop.imageLink} alt=""></img>
        </div>
    );
}

export default DogCard;