import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const First = () => {

    const [state, setState] = useState({
        initial: 5000,
        monthly: 1000,
        rate: 0.05,
        month: 12,
        total: 0,
        year: 10
    })
    const handleChange = (e) =>{
        setState({...state, [e.target.id]: e.target.value})
    }
    const handleBlur = () =>{
        const [P, PMT, r, n, t] = [state.initial, state.monthly, state.rate, state.month, state.year ]
        const total = (P*(1+r/n)**(n*t)) + (PMT * (((1 + r/n)**(n*t)-1)/(r/n)))
        setState({...state, total: total})
    }
    return (    
        <Container>
            <h1>Compounding interest calculator</h1>
            <label for="initial">Initial Investment</label>
            <input onBlur={handleBlur} value={state.initial} onChange={(e)=>{setState({...state, initial: e.target.value})}} id="initial" type="number" />
            <label for="monthly">Reoccuring investment</label>
            <input onBlur={handleBlur} value={state.monthly} onChange={(e)=>{setState({...state, monthly: e.target.value})}} id="monthly" type="number" />
            <label for="rate">Yearly returns</label>
            <input onBlur={handleBlur} value={state.rate} onChange={(e)=>{setState({...state, rate: e.target.value})}} id="rate" type="number" />
            <label for="month">Frequency</label>
            <input onBlur={handleBlur} value={state.month} onChange={(e)=>{setState({...state, month: e.target.value})}} id="month" type="number" />
            <label for="year">Years</label>
            <input onBlur={handleBlur} value={state.year} onChange={(e)=>{setState({...state, year: e.target.value})}} id="year" type="number" />
            <button type="submit" onClick={handleBlur}>Submit</button>
            <h1>{state.total.toLocaleString('en')}</h1>           

        </Container>
    )   
}

const Container = styled.div`
    display: grid;
    width: 50%;
    margin: 0 auto;
    text-align: left;
    input[type=number]{
        appearance: textfield;
        padding: 12px 20px;
        margin: 8px 0;
  box-sizing: border-box;
    }
`