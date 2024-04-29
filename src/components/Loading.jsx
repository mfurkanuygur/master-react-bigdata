import svg from "../assets/loading.svg"

const Loading = () => {
    return (
        <div className="loading">
            <img src={svg} alt="loading..." />
        </div>
    )
}

export default Loading