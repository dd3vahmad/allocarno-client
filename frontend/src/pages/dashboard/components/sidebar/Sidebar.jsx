import React, { useState } from 'react'
import { BiSolidUpArrow } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { SiDavinciresolve } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";


const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState("dashboard")

    return (

        <div className="sidebar">
            <div className="sidebar-section">
                <div className="flex items-center gap-4 pl-2 sidebar-header">
                    <h3 >Timetable Manager</h3>
                    <span><BiSolidUpArrow /></span>
                </div>
                <ul className="sidebar-menu">
                    <li className={`flex items-center gap-4 ${activeIndex === "dashboard" ? "active" : ""}`} onClick={() => setActiveIndex("dashboard")}> 
                        <span className="menu-icon">
                            <LuLayoutDashboard />
                        </span>
                        <p> Dashboard</p>
                    </li>
                    <li className={`flex items-center gap-4 ${activeIndex === "upload" ? "active" : ""}`} onClick={() => setActiveIndex("upload")}> 
                        <span className="menu-icon">
                            <MdOutlineCloudUpload />
                        </span>
                        <p> Upload Data</p>
                    </li>
                   <li className={`flex items-center gap-4 ${activeIndex === "generate" ? "active" : ""}`} onClick={() => setActiveIndex("generate")}> 
                        <span className="menu-icon">
                            <RiAiGenerate />
                        </span>
                        <p>Generate Timetable</p>
                    </li>
                    <li className={`flex items-center gap-4 ${activeIndex === "publish" ? "active" : ""}`} onClick={() => setActiveIndex("publish")}> 
                        <span className="menu-icon">
                            <MdOutlinePublishedWithChanges />
                        </span>
                        <p>Publish to Blockchain</p>
                    </li>
                   <li className={`flex items-center gap-4 ${activeIndex === "resolve" ? "active" : ""}`} onClick={() => setActiveIndex("resolve")}> 
                        <span className="menu-icon">
                            <SiDavinciresolve />
                        </span>
                        <p>Resolve Conflicts</p>
                    </li>
                   <li className={`flex items-center gap-4 ${activeIndex === "transaction" ? "active" : ""}`} onClick={() => setActiveIndex("transaction")}> 
                        <span className="menu-icon">
                            <GrTransaction />
                        </span>
                        <p>Transaction logs</p>
                    </li>
                </ul>
            </div>

            <div className="mt-12 mb-8 sidebar-section">
                <div className="flex items-center gap-4 sidebar-header system-preference">
                    <h3 >System Preference</h3>
                    <span><BiSolidUpArrow /></span>
                </div>
                <ul className="sidebar-menu">
                <li className={`flex items-center gap-4 ${activeIndex === "settings" ? "active" : ""}`} onClick={() => setActiveIndex("settings")}> 
                        <span className="menu-icon">
                            <IoIosSettings />
                        </span>
                        <p>Settings</p>
                    </li>
                </ul>
            </div>

            <div className="sidebar-footer">
                <ul className="sidebar-menu">
                    <li className='flex items-center gap-4'>
                        <span className="menu-icon">
                            <IoLogOutOutline />
                        </span>
                        <p>Logout</p>
                    </li>

                </ul>
            </div>


        </div>
    )
}

export default Sidebar