import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { LiaRedoAltSolid } from "react-icons/lia";
import { MdOutlinePublish } from "react-icons/md";

const QuickActionsPanel = () => {
    return (
        <>
            <div className="quick-actions-panel">
                <h2 className="panel-title">Quick Actions</h2>
                <div className="quick-actions">
                    <button className="action-button">
                        <span className="action-icon"><IoMdAdd /></span>
                        <span className="action-text">Generate Timetable</span>
                    </button>
                    <button className="action-button">
                        <span className="action-icon"><LiaRedoAltSolid /></span>
                        <span className="action-text">Resolve Conflicts</span>
                    </button>
                    <button className="action-button">
                        <span className="action-icon"><MdOutlinePublish /></span>
                        <span className="action-text">Publish to Blockchain</span>
                    </button>
                </div>
            </div>
        </>

    )
}

export default QuickActionsPanel