import React from 'react'

const NotificationBar = () => {
  return (
    <nav className="nav-bar">
        <div className="tab">
            <p className=' | bold'>Notifications <span className="notification-num | bold">3</span> </p>
        </div>
        <p className="read-all | gray ">Mark all as read</p>
    </nav>        
    )
}

export default NotificationBar
