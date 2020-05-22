import React, { Component } from 'react'

class Machine extends Component {
    render(){
        const {S1,S2,S3} = this.props
        const winner = (S1 === S2) && (S2 === S3);
        return (
            <div>
              <p> {S1} {S2} {S3}</p> 
              <p>{winner ?'Winner' : 'Loser'} </p>

            </div>

        );
    }
}

export default Machine