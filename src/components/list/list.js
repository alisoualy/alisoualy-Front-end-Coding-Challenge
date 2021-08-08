import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const list = ({repos}) => {
    return (
        <div>
            {repos &&
                repos.map((_repo) => (
                    <div  key={_repo.id} className="m-5">
                        <div className="row">
                            <div className="col-md-auto" >
                                <img className = "avatar avatar-xs" src={_repo.owner.avatar_url} style={{height:107}}/>
                            </div>

                            <div className="col-md-auto">
                                <div className="h2" >{_repo.name}</div>
                                <div>{_repo.description}</div>
                                <div className="row">
                                    <div className="col-md-auto border m-2 ">Stars : {_repo.stargazers_count} </div>
                                    <div className="col-md-auto border m-2">Issues : {_repo.open_issues} </div>
                                    <p className="col">Submitted 30 days ago by <span className="h5">{_repo.owner.login}</span></p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
            ))}
        </div>
    )
}

export default list

