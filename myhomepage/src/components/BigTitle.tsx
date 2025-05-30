import React from 'react'
import "../components/scss/BigTitle.scss";

const BigTitle = ({ title, descTitle, subTitle }: { title: string, descTitle?: string, subTitle?: string }) => {
    return (
        <div>
            <div className="big-title-box">
                <h2 className="title">
                    <span>{title}</span>
                    <span>{descTitle}</span>
                    <span>{subTitle}</span>
                </h2>
            </div>
        </div>
    )
}

export default BigTitle