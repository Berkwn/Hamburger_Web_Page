import React from 'react'
import { MenuList } from '../helper/MenuList'
import { Card } from 'react-bootstrap'


export default function Menu() {
  return (
   <>
   <div className='menuPage'>
    <h1 className='menuTitle mt-5'>OUR MENU</h1>
    <div className='menuList'>
    {MenuList.map((food,key)=>{

                
              return   <Card className='menu-Item' style={{ width: '18rem',margin:"7px" }}>
              <Card.Img variant="top" src={food.image} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text >
                  {food.price} $</Card.Text>
                
              </Card.Body>
            </Card>
        

    })}
</div>
   </div>
   
   </>
  )
}
