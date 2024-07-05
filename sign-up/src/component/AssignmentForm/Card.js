import './card.css';

function Card({children}){
    return <p className='card'>
        {children}
    </p>
}

function ImgCard({src,children}){
    return<Card>
        <div className='card-img'>
            <img src={src}></img>
        </div>
        <div>
            {children}
        </div>
    </Card>
}
function TittleCard({tittle,children}){
    return<Card>
        <div>
        <h3>{tittle}</h3>
        </div>
        <div>
            {children}
        </div>
    </Card>
}
export{
    TittleCard,
    ImgCard
}