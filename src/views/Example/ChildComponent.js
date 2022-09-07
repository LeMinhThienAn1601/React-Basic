import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handldeShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        let { arrJob } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? "showJobs = True" : "showJobs = False";
        console.log(">>>Check: ", check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handldeShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-List">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handldeShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}


// const ChildComponent = (props) => {
//     let {arrJob} = props;
//         return (
//             <>
//                 <div className="job-List">
//                     {
//                         arrJob.map((item, index) => {
//                             if (item.salary >= 500) {
//                                 return (
//                                     <div key={item.id}>
//                                         {item.title} - {item.salary} $
//                                     </div>
//                                 )
//                             }

//                         })
//                     }
//                 </div>
//             </>
//         )
// }

export default ChildComponent;