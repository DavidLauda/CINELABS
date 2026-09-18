export default function MoviePoster({image, children}){
    return(
        <div className="poster">
            <img src={image} className="poster-image"></img>
            {children}
        </div>
    )
}