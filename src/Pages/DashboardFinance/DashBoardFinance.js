import React, { useState, useContext } from 'react'
import './DashboardFinance.css';
import BarChart from '../../Components/AllChart/BarChart';
import LineChart from '../../Components/AllChart/LineChart';
import { DashboardContext } from '../../context/DashboardContext';

export default function DashBoardFinance() {
    const { dataChart, changeYear, yearData } = useContext(DashboardContext);
    return (
        <div className='global-container'>
            <h1>Les résultats de l'année : {yearData}</h1>
            <form>
                <label htmlFor='year'>Choisissez une date</label>
                <select id="year" onChange={changeYear}>
                    <option selected={yearData === '2022' && 'selected'} value="2022">2022</option>
                    <option selected={yearData === '2021' && 'selected'} value="2021">2021</option>
                    <option selected={yearData === '2020' && 'selected'} value="2020">2020</option>
                    <option selected={yearData === '2019' && 'selected'} value="2019">2019</option>
                </select>
            </form>
            <div className='dashboard-container'>
                <BarChart data={dataChart?.chart1} name='Chiffres bimestriels' />
                <LineChart data={dataChart?.chart2} name="Nombre de clients (en milliers)" />
                <LineChart data={dataChart?.chart3} name="Nombre d'accidents" />
                <BarChart data={dataChart?.chart4} name='Budget marketing' />
            </div>
        </div>
    )
}
