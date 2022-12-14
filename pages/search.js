import React from 'react'
import tw from 'tailwind-styled-components'

const Search = () => {
  return (
    <Wrapper>
        <ButtonContainer>
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
        <InputContainer>
        <FromToIcons>
            <Circle src="https://img.icons8.com/emoji/48/null/black-circle-emoji.png" />
            <Line src ="https://img.icons8.com/ios/50/null/vertical-line.png" />
            <Square src="https://img.icons8.com/sf-black-filled/64/null/rectangle.png" />

        </FromToIcons>
        <InputBoxes>
         <Input placeholder='Enter Abgolung Ort'/>
         <Input  placeholder='Wohin ?'/>
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/android/24/null/plus.png" />
        </InputContainer>
        <SavedPlaces>
            <StartIcon src="https://img.icons8.com/windows/32/null/christmas-star.png" />
            Saved Place
        </SavedPlaces>
        <ConfirmLocation>
            <ButtonLocation>Bestätegen Sie den Ort</ButtonLocation>
        </ConfirmLocation>
    </Wrapper>
    )
}

export default Search


const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white  px-4
`
const BackButton = tw.img`
h-12
`

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const InputContainer = tw.div`
bg-white flex  items-center px-4 mb-2
`


const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none 
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2

`

const StartIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2

`
const ConfirmLocation = tw.div`
bg-black 
`

const ButtonLocation = tw.div``
