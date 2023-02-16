function Card(){
    return(
        <div className="card">
            <img src="/images/katie-zaferes.png" className="card-image" alt="katie zaferes" />
            <div className="card-info">
                <img src="/images/star.png" className="card-star" alt="star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card