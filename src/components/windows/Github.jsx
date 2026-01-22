import React from 'react'
import MacWind from './MacWind'
import githubData from "../../assets/github.json"
import "./github.scss"

const GitCard = ({ data = { id: "1", image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return (
        <div className='card'>
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p className='description'>{data.description}</p>

            <div className="tags">
                {
                    data.tags.map(tag => <p className='tag'>{tag}</p>)
                }
            </div>

            <div className="urls">
                <a href={data.repoLink}>Repository</a>
                <a href={data.demoLink}>Demo Link</a>
            </div>
        </ div>
    )
}

const Github = () => {
    return (
        <MacWind>
            <div className="cards">
                {
                    githubData.map(project => {
                        return <GitCard data={project} />
                    })
                }
            </div>
        </MacWind>
    )
}

export default Github