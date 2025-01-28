import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaEye, FaBullseye } from 'react-icons/fa'
import TodoApp from './TodoProgress'
import { motion } from 'framer-motion'
export default function Connections({data}) {
   
const [showToDo,setShowTODO]=useState(false)
    const profileInitial = data.name.charAt(0).toUpperCase()
const handelCard=()=>{
setShowTODO(false)

}
    return (
        <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial state (invisible and shifted up)
        animate={{ opacity: 1, y: 0 }} // Animation to bring it into view
        transition={{ duration: 0.6 }} // Duration of the animation
      >
        <div className="d-flex justify-content-center mt-4">
            <Card style={{ width: '30rem', position: 'relative' }}>
                <div className="position-absolute" style={{ top: '10px', right: '10px' }}>
                    <Button variant="link">
                       profile <FaEye />
                    </Button>
                </div>
                <Card.Body>
                    <div className=" align-items-center mb-3">
                        <div 
                            className="rounded-circle d-flex justify-content-center align-items-center"
                            style={{
                                width: '50px', 
                                height: '50px', 
                                backgroundColor: '#007bff', 
                                color: 'white', 
                                fontSize: '24px', 
                                textTransform: 'uppercase'
                            }}
                        >
                            {profileInitial}
                        </div>
                        <div className="ms-3">
                        <Card.Title>
                                {data.name}
                            </Card.Title>
                        </div>
                    </div>
                    {data.goalComplete ? (
                        <div className="alert alert-success mb-3" role="alert">
                            Goal Completed!
                        </div>
                    ) : (
                        <div className="alert alert-danger mb-3" role="alert">
                            Goal Not Completed!
                        </div>
                    )}
                    <div className="d-flex align-items-center justify-content-between">
                        <Button variant="primary" className="d-flex align-items-center" onClick={()=>setShowTODO(true)}>
                            Assign Goals
                        </Button>
                        <div className="d-flex align-items-center">
                            <span>{data.assignedTasks}/{data.completedTasks}</span>
                            <FaBullseye className="ms-2" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
{showToDo&& <TodoApp handelCard={handelCard}/>
}        </div>
</motion.div>
    )
}
