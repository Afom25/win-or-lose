import React, { Component } from 'react'

class Machine extends Component {
    render(){
        const {S1,S2,S3} = this.props
        const winner = (S1 === S2) && (S2 === S3);
        return (
            <div className='container text-center'>
              <p> {S1} {S2} {S3}</p> 
              <button type='button' class='btn btn-primary'>{winner ?'Winner' : 'Loser'} </button>

            </div>

        );
    }
}

export default Machine