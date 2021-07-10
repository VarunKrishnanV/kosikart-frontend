import React from 'react'
import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit';


function UserInfo() {
    return (
        <Container>
            <div className="form__item">
                <label htmlFor="email">Email / Phone number</label>
                <div className="inputEdit">
                    <input type="text" /><EditIcon className="editIcon" />
                </div>
            </div>
            <div className="form__item">
                <label htmlFor="email">Email / Phone number</label>
                <div className="inputEdit">
                    <input type="text" /><EditIcon className="editIcon" />
                </div>
            </div>
            <div className="form__item">
                <label htmlFor="email">Email / Phone number</label>
                <div className="inputEdit">
                    <input type="text" /><EditIcon className="editIcon" />
                </div>
            </div>
            <div className="form__item">
                <label htmlFor="email">Email / Phone number</label>
                <div className="inputEdit">
                    <input type="text" /><EditIcon className="editIcon" />
                </div>
            </div>
        </Container>
    )
}

export default UserInfo


const Container = styled.div`
    font-size : 1em;
    margin : 3em;
    @media all and (max-width : 768px){
        margin : 10px;
        margin-top : 3em;
    }



    .form__item{
        display : flex;
        flex-direction: column;
        margin-bottom: .8em;
    }

    label{
        display: block;
        flex-direction: column;
        font-weight: 500;
        margin-bottom: .5em;
    }
    .inputEdit{
        display : flex;
        align-items  : center;
        input{
            display: block;
            flex-direction: column;
            padding: 5px;
            width: 30%;
            @media all and (max-width : 768px){
                width : 78%;
            }
        }

        .editIcon{
            margin-left : 20px;
            cursor : pointer;
        }
    }

`

