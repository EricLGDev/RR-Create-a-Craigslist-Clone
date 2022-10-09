import Posting from './Posting'

const Gallery = (props) => {
    return (
        <div>
            {props.posting.map((p, i) => {
                return <Posting posting={p} key={i} />
            })}
        </div>
    )
}

export default Gallery