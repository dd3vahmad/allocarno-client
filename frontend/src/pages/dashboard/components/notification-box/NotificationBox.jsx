import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'

const NotificationBox = () => {
    return (
        <>
            <div className="notification-box-wrapper">
                <div className="notification-box-container">
                    <div className="flex items-center justify-between notification-box-header">
                        <h3>Notifications</h3>

                        <a href="" className='mark-notification-as-read-text'>
                            <span>
                                Mark all as read
                            </span>
                        </a>
                    </div>

                    <div className="notification-box-content-area">
                        <div className="notifications-list">
                            {/* can take maximum of 7 Notification items */}
                            <a href="" className='unread'>
                                <div className="notification-item">
                                    <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                                        <FiArrowUpRight />
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-text">Schedule for GNS 301 updated.</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="notification-item">
                                    <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                                        <FiArrowUpRight />
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-text">Schedule for GNS 301 updated.</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="notification-item">
                                    <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                                        <FiArrowUpRight />
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-text">Schedule for GNS 301 updated.</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="notification-item">
                                    <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                                        <FiArrowUpRight />
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-text">Schedule for GNS 301 updated.</div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className='unread'>
                                <div className="notification-item">
                                    <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                                        <FiArrowUpRight />
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-text">Schedule for GNS 301 updated.</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="notification-item">
                                    <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                                        <FiArrowUpRight />
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-text">Schedule for GNS 301 updated.</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="notification-item">
                                    <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                                        <FiArrowUpRight />
                                    </div>
                                    <div className="notification-content">
                                        <div className="notification-text">Schedule for GNS 301 updated.</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationBox