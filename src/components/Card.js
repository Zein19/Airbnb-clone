function Card(props){

    let badgeText
    if (props.openSpots ===0){
        badgeText="SOLD OUT"
    } else if (props.location === "Online"){
        badgeText ="ONLINE"
    }
    


    return(
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card-image" alt={props.item.title} />
            <div className="card-info">
                <img src="/images/star.png" className="card-star" alt="star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.statsreviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card