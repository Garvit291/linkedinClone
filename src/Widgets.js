import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading,subtitle) =>{
        return (
            <div className='widget__article'>
                <div className='widget__articleleft'>
                    <FiberManualRecordIcon/>
                </div>

                <div className='widget__articleright'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='widgets'>
            <div className='widget__header'>
                <h2>
                LinkedIn News
                </h2>
                <InfoIcon/>
            </div>

            {newsArticle('Garvit created this' , 'recent project made by him is linekdin clone')}
            {newsArticle('Corona update' , ' Two new vaccines in india covavaxin and covsheild')}
            {newsArticle('Farmers protest' , 'Farmers sitting at the border refused to step back')}
            
        </div>
    )
}

export default Widgets
