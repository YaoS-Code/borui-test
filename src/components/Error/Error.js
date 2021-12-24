import React from 'react';
import "./Error.css"
import { useTranslation } from "react-i18next"

const Error = () => {
    
  const { t } = useTranslation()
    return(
        <div className="container-fluid bg-dark error">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <a href="/home" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                Take Me Home </a><a href="/about" className="btn btn-default btn-lg btn-warning"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error
