import React from 'react'

const About = () => {
    return (
        <div className='container row' id='aboutDiv'>
            <div className="card border-primary mb-3 col-4 mx-1 " style={{maxWidth:'18rem'}} >
                <div className="card-header">About Our Expense Tracker</div>
                <div className="card-body text-primary">
                    <p className="card-text">Managing personal finances can be challenging, but with our Expense Tracker app, it's easier than ever to take control of your money. Our goal is to provide a seamless, intuitive, and powerful platform to help you:
                       <b>1.Track expenses effortlessly:</b>Record every expense and stay aware of where your money goes.<br/>
                        <b>2.Create budgets:</b>Set financial goals and monitor your progress.<br/>
                        <b>3.Analyze spending patterns: </b>Gain insights into your spending habits and make better financial decisions.
                    </p>
                </div>
            </div>
            <div className="card border-primary mb-3 col-4 mx-1" style={{maxWidth:'18rem'}}>
                <div className="card-header">Features</div>
                <div className="card-body text-primary">
                    <p className="card-text">User-friendly Interface: Easily navigate through features designed to simplify your financial tracking experience.
                        Real-Time Updates: Access up-to-date records of your financial data anytime, anywhere.
                        Custom Categories: Organize your spending by creating personalized categories.
                        Secure Data Storage: Your privacy and data security are our top priorities
                        <b>1.User-friendly Interface:</b> Easily navigate through features designed to simplify your financial tracking experience.
                        <b>2.Real-Time Updates:</b> Access up-to-date records of your financial data anytime, anywhere.<br/>
                        <b>3.Custom Categories: </b>Organize your spending by creating personalized categories
                        
                        </p>
                </div>
            </div>
            <div className="card border-primary mb-3 col-4 mx-1" style={{maxWidth:'18rem'}}>
                <div className="card-header">Features</div>
                <div className="card-body text-primary">
                    <p className="card-text">Our app is designed with you in mind. Whether you're saving for a big purchase, paying off debt, or just trying to avoid overspending, our tools will help you stay on top of your financial goals. </p>
                </div>
            </div>
        </div>
    )
}

export default About
