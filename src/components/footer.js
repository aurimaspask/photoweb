import React from "react";

const Footer = () => {
    return( 
        <div className="main-footer">
            <div className="container">
                <hr />
                <div className="row">
                    {/* Footer Bottom */}
                    <p className="footer-copyright col-sm py-3">
                        &copy;{new Date().getFullYear()} Copyright: AP Photography. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}    

export default Footer