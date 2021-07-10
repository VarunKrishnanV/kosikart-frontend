import React from 'react'
import styled from 'styled-components'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const address = [
    {
        name : "Venugopalan T",
        addressLine1 : "Netaji Apparel Park",
        addressLine2 : "Eettiveerampalayam, Tirupur",
        state : "Tamilnadu",
        zipCode : "641666",
        country : "India",
        contactNumber : "‪9994711163‬",

    },
    {
        name : "Venugopalan T",
        addressLine1 : "Netaji Apparel Park",
        addressLine2 : "Eettiveerampalayam, Tirupur",
        state : "Tamilnadu",
        zipCode : "641666",
        country : "India",
        contactNumber : "‪9994711163‬",

    }
]


function Address() {
    return (
        <Container>
            {/* <Address> */}
                {
                    address.map(item => {
                        return (
                            <div className="addressContainer">
                                <div className="address">
                                {item.name}<br/>
                                {item.addressLine1}<br/>
                                {item.addressLine2}<br/>
                                {item.state}<br/>
                                {item.zipCode}<br/>
                                {item.contactNumber}<br/>
                                
                                </div>
                                <div className="edit">Edit | Remove</div>
                            </div>
                            
                        )
                    })
                }
            {/* </Address> */}

            <div className="addressContainer addNewAddress">
                <AddCircleIcon className="AddIcon"/>Add New Address
            </div>

        </Container>
    )
}

export default Address


const Container = styled.div`
    display : flex;
    font-size : 1em;
    margin : 3em;
    @media all and (max-width : 768px){
        margin : 10px;
        flex-direction : column;
    }
    .addressContainer{
        border : 1px solid gray;
        padding : 15px;
        margin : 10px;
    }
    .edit{
        margin-top : 2em;
        color : gray;
        font-size : .8em;
    }
    .addNewAddress{
        display : flex;
        align-items : center;
        justify-content: center;
        flex-direction: column;
        border: 2px dashed gray;
        padding : 30px;
    }

`


